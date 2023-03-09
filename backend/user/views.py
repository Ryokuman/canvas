from django.http import JsonResponse
from django.shortcuts import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .userUtil import user_create, user_compare_password, user_find_by_email, user_generate_refresh_token, \
    user_generate_access_token, user_token_to_data, user_hash_password, user_new_email_check, user_email_find, \
    user_refresh_to_access


# user
@api_view(['GET', 'POST', 'PATCH'])
def user(request):
    if request.method == 'GET':
        return user_get(request)
    if request.method == 'POST':
        return user_post(request)
    if request.method == 'PATCH':
        return user_patch(request)


# user_find
# 검색 기능
def user_get(request):
    return


# signup
def user_post(request):
    email = request.data['email']
    password = request.data['password']
    if email and password:
        user_data = user_find_by_email(email)
        if user_data:
            return JsonResponse({"result": "duplicated email"}, status=401)
        else:
            user_create(email=email, password=password)
            return JsonResponse({"result": "success"}, status=200)
    return JsonResponse({"result": "missing value"}, status=400)


# change_userdata
def user_patch(request):
    request_type = request.data['type']
    if request_type == 'password':
        return user_patch_password(request)
    if request_type == 'name':
        return user_patch_password(request)


# password
def user_patch_password(request):
    token = request.headers.get('Authorization', None)
    payload = user_token_to_data(token=token)
    user_data = user_find_by_email(payload.get('email'))
    password = request.data['password']
    new_password = request.data['newPassword']

    if user_data and new_password and password:
        if user_compare_password(password=password, user_data=user_data):
            hash_password, salt = user_hash_password(value.get('password'))
            user_data.password = hash_password
            user_data.salt = salt
            user_data.save()
            return JsonResponse({"result": "success"}, status=200)

        return JsonResponse({"result": "wrong password"}, status=403)
    return JsonResponse({"result": "error 401"}, status=401)


# name
def user_patch_name(request):
    token = request.headers.get('Authorization', None)
    payload = user_token_to_data(token=token)
    user_data = user_find_by_email(payload.get('name'))
    new_name = request.data['newName']

    if user_data and new_name:
        user_data.name = name
        user_data.save()
        return JsonResponse({"result": "success"}, status=200)
    return JsonResponse({"result": "error 401"}, status=401)


# auth
@api_view(['GET', 'POST'])
def auth(request):
    if request.method == 'GET':
        return auth_get(request)
    if request.method == 'POST':
        return auth_post(request)


def auth_get(request):
    token = request.headers.get('Authorization', None)
    payload = user_token_to_data(token=token)
    user_data = user_find_by_email(payload.get('email'))
    if user_data and payload.get('type') == 'refresh_token':
        access_token = user_refresh_to_access(refresh_token=token)
        return JsonResponse({"access_token": access_token}, status=401)
    return JsonResponse({"result": "invalid Token"}, status=401)


def auth_post(request):
    email = request.data['email']
    password = request.data['password']

    user_data = user_find_by_email(email=email)
    if user_data:
        result = user_compare_password(password=password, user_data=user_data)
        if result:
            access_token = user_generate_access_token(user_data=user_data)
            refresh_token = user_generate_refresh_token(user_data=user_data)
            return JsonResponse({
                "access_token": access_token,
                "refresh_token": refresh_token
            }, status=200)
    return JsonResponse({"result": "login fail"}, status=401)


# email
@api_view(['POST'])
def mail(request):
    if request.method == 'POST':
        type = request.data['type']
        if type == "check":
            return mail_post_check(request)
        if type == "new":
            return mail_post_new(request)


# validate
def mail_post_check(request):
    email = request.data['email']
    value = request.data['value']
    checker_data = user_email_find(email=email)
    if checker_data:
        if checker_data.value == value:
            return JsonResponse({"result": "success"}, status=200)
    return JsonResponse({"result": "fail"}, status=401)


# new_password
def mail_post_new(request):
    email = request.data['email']
    user_new_email_check(email=email)
    return JsonResponse({"result": "send Email"}, status=200)
