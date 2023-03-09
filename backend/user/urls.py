from django.urls import path
from . import views

# users/urls.py
urlpatterns = [
    path('', views.user),
    path('auth', views.auth),
    path('mail', views.mail),
]
