from django.urls import path
from . import views

# users/urls.py
urlpatterns = [
    path('', views.user),
]
