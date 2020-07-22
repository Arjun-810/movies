# from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import manager
from movies.models import movieList


# Create your views here.

def managerLogin(request):
    if request.method == "POST":
        login_data=json.loads(request.body)
        mail_id = login_data['mail_id']
        password = login_data['password']
        if manager.objects.filter(mail_id__contains=mail_id,password__contains=password).filter(mail_id=mail_id,password=password).exists():
            # return JsonResponse("OK",safe=False)
            return_data=manager.objects.filter(mail_id=mail_id).values('id')
            return JsonResponse(list(return_data),safe=False)
        else:
            return JsonResponse("Invalid Credentials",safe=False)


def moviesList(request):
   if request.method=="GET":
        return_data=movieList.objects.filter(status__contains="ok").values('id', 'url', 'title', 'img_url', 'movie_name')
        return JsonResponse(list(return_data),safe=False)