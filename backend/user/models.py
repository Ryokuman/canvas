from django.db import models
import uuid


class user(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField(unique=True, max_length=20)
    email = models.TextField(unique=True, max_length=50)
    password = models.BinaryField(max_length=60)
    salt = models.BinaryField(max_length=29)

    class Meta:
        db_table = 'member'
