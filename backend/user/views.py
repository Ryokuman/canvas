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
            return post_new(request)
        else:
            return post_login(request)
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


def post_login(request):
# auth
@api_view(['POST'])
def auth(request):
    if request.method == 'GET':
        return auth_get(request)
    if request.method == 'POST':
        return auth_post(request)


def auth_get(request):
    token = request.headers.get('Authorization', None)
    payload = user_token_to_data(token=token)
    user_data = user_find_by_email(payload.get('name'))
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


def patch(request):
    payload = user_token_to_data(request.headers.get('Authorization', None))
    value = request.data('value')
    return JsonResponse({"result": value}, status=200)
