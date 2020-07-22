from django.db import models
# from appointment.models import appointments

# Create your models here.


class manager(models.Model):
    frist_name = models.CharField(max_length=50,default="none")
    last_name = models.CharField(max_length=50,default="none")
    mail_id = models.CharField(max_length=50)
    password = models.CharField(max_length=500)
    address = models.CharField(max_length=500)
    phone_no = models.CharField(max_length=500)
    message = models.CharField(max_length=500)
    age=models.CharField(max_length=200,default="none")
    Gender=models.CharField(max_length=200,default="none")
    status=models.CharField(max_length=200,default="OK")
