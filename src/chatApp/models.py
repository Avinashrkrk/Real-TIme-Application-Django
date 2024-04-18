from django.db import models

# Create your models here.
class  user(models.Model):
    email = models.EmailField(max_length=40)
    password = models.CharField(max_length=10)

class person(models.Model):
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)