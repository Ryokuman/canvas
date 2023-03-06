from .models import user


# user create
def user_create(name, email, password):
    hashed_password, salt = user_hash_password(password)
    return user.objects.create(name=name, email=email, password=hashed_password, salt=salt)


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
