from .models import User, EmailChecker
from backend.settings import JWT_ALGORITHM, JWT_SECRET_KEY, EMAIL_HOST
from datetime import timedelta, datetime

import bcrypt
import jwt
import uuid


# user create
def user_create(email, password):
    hashed_password, salt = user_hash_password(password)
    tmp_name = str(uuid.uuid4())[0:8]
    return User.objects.create(email=email, password=hashed_password, salt=salt, name=tmp_name)


# Token
def user_token_to_data(token):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=JWT_ALGORITHM)
    except jwt.exceptions.ExpiredSignatureError:
        return "Expired_Token"
    except jwt.exceptions.DecodeError:
        return "Invalid_Token"
    return payload


def user_refresh_to_access(refresh_token):
    try:
        payload = jwt.decode(refresh_token, JWT_SECRET_KEY, algorithms=JWT_ALGORITHM)
        access_token = jwt.encode({'name': payload.get('name'), 'email': payload.get('email'),
                                   'exp': datetime.utcnow() + timedelta(minutes=15), 'type': "access_token"},
                                  JWT_SECRET_KEY, JWT_ALGORITHM).decode('utf-8')
    except jwt.exceptions.ExpiredSignatureError or jwt.exceptions.DecodeError:
        return False
    return access_token


def user_generate_access_token(user_data):
    return jwt.encode({'name': user_data.name, 'email': user_data.email,
                       'exp': datetime.utcnow() + timedelta(minutes=15), 'type': 'access_token'},
                      JWT_SECRET_KEY, JWT_ALGORITHM).decode('utf-8')


def user_generate_refresh_token(user_data):
    return jwt.encode({'name': user_data.name, 'email': user_data.email,
                       'exp': datetime.utcnow() + timedelta(days=1), 'type': "refresh_token"},
                      JWT_SECRET_KEY, JWT_ALGORITHM).decode('utf-8')


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
def user_find_by_name(name) -> User:
    result: User = User.objects.filter(name=name).first()
    return result


def user_find_by_email(email) -> User:
    result: User = User.objects.filter(email=email).first()
    return result
