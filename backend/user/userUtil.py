from .models import user
import bcrypt
import jwt
import uuid


# user create
def user_create(email, password):
    hashed_password, salt = user_hash_password(password)
    tmp_name = str(uuid.uuid4())[0:8]
    return user.objects.create(email=email, password=hashed_password, salt=salt, name=tmp_name)


# Password Hashing
def user_hash_password(password):
    password = str(password).encode('utf-8')
    salt = bcrypt.gensalt()
    hash_password = bcrypt.hashpw(password, salt)
    return hash_password, salt


def user_compare_password(password, user_data):
    password = str(password).encode('utf-8')
    hash_password = bcrypt.hashpw(password, user_data.salt)
    return hash_password == user_data.password


# find
def user_find_by_name(name):
    return user.objects.filter(name=name)


def user_find_by_email(email):
    return user.objects.filter(email=email)
