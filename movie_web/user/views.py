# from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import user


# Create your views here.

def userRegistration(request):
    if request.method == "POST":
        user_data=json.loads(request.body)
        mail_id=user_data['mail_id']
        if user.objects.filter(mail_id=mail_id).exists():
            return JsonResponse("EMAIL ALREADY REGISTERED",safe=False)
        else:
            user.objects.create(**user_data)
            return JsonResponse("OK",safe=False)


def userLogin(request):
    if request.method == "POST":
        login_data=json.loads(request.body)
        mail_id = login_data['mail_id']
        password = login_data['password']
        if user.objects.filter(mail_id__contains=mail_id,password__contains=password).filter(mail_id=mail_id,password=password).exists():
            # return JsonResponse("OK",safe=False)
            return_data=user.objects.filter(mail_id=mail_id).values('id')
            return JsonResponse(list(return_data),safe=False)
        else:
            return JsonResponse("Invalid Credentials",safe=False)
