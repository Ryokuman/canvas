from django.http import JsonResponse
from django.shortcuts import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .userUtil import user_create, user_compare_password, user_find_by_email


@api_view(['GET', 'POST', 'PATCH'])
def user(request):
    if request.method == 'GET':
        return get(request)
    if request.method == 'POST':
        if request.data['req'] == "new":
            return post_new(request)
        else:
            return post_login(request)
    if request.method == 'PATCH':
        return patch(request)


def get(request):
    value = request.GET.get('value')
    return JsonResponse({"result": value}, status=200)


def post_new(request):
    email = request.data['email']
    password = request.data['password']
    user_create(email=email, password=password)

    return JsonResponse({"result": "success"}, status=200)


def post_login(request):
    email = request.data['email']
    password = request.data['password']

    user_data = user_find_by_email(email=email).first()
    result = user_compare_password(password=password, user_data=user_data)

    return JsonResponse({"result": result}, status=200)


def patch(request):
    payload = user_token_to_data(request.headers.get('Authorization', None))
    value = request.data('value')
    return JsonResponse({"result": value}, status=200)
