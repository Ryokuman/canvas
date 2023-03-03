from django.http import JsonResponse
from django.shortcuts import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'PATCH'])
def user(request):
    if request.method == 'GET':
        return get(request)
    if request.method == 'POST':
        return post(request)
    if request.method == 'PATCH':
        return patch(request)


def get(request):
    value = request.GET.get('value')
    return JsonResponse({"result": value}, status=200)


def post(request):
    value = request.data('value')
    return JsonResponse({"result": value}, status=200)


def patch(request):
    payload = user_token_to_data(request.headers.get('Authorization', None))
    value = request.data('value')
    return JsonResponse({"result": value}, status=200)
