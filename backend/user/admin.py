from django.contrib import admin
from .models import User, EmailChecker


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'password', 'salt', 'email']


@admin.register(EmailChecker)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'value', 'is_valid']
