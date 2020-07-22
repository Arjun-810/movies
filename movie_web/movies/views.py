from django.shortcuts import render
from .models import movieList, movieCmnt
from django.http import JsonResponse
import json

# Create your views here.
def movieLists(request):
    if request.method=="GET": 
        return_data=movieList.objects.filter(status__contains="ok").values('id', 'img_url', 'movie_name')
        return JsonResponse(list(return_data),safe=False)


def movie(request):
    if request.method=="POST":
        movie_view_data=json.loads(request.body)
        id=movie_view_data['id']
        if movieList.objects.filter(id=id).exists():
            movie = movieList.objects.filter(id=id).values()
            return JsonResponse( list(movie),safe=False)
        else:
            return JsonResponse("not exist",safe=False)
   
def movieCmnts(request):
    if request.method=="POST":
        cmnt_data=json.loads(request.body)
        comments=cmnt_data['comments']
        if movieCmnt.objects.filter(comments=comments).exists():
            return JsonResponse("comments ALREADY exist",safe=False)
        else:
            movieCmnt.objects.create(**cmnt_data)
            return JsonResponse("OK",safe=False)

def viewCmnt(request):
    if request.method=="POST":
        comment_view_data=json.loads(request.body)
        id=comment_view_data['movieList_id']
        if movieCmnt.objects.filter(movieList_id=id).exists():
            cmnt = movieCmnt.objects.filter(movieList_id=id).values('comments','user__frist_name')
            return JsonResponse( list(cmnt),safe=False)
        else:
            return JsonResponse("not exist",safe=False)
   
def allcomments(request):
    if request.method=="GET": 
        return_data=movieCmnt.objects.filter(status__contains="ok").values('id', 'comments', 'movieList__movie_name')
        return JsonResponse(list(return_data),safe=False)

def delet_movie(request):
    if request.method=="POST":
        delet_movie_data=json.loads(request.body)
        movie_id=delet_movie_data['movie_id']
        movieList.objects.filter(id=movie_id).update(status="Deactivate")
        return JsonResponse("OK",safe=False)


def delet_commments(request):
    if request.method=="POST":
        delet_cmnt_data=json.loads(request.body)
        cmnt_id=delet_cmnt_data['cmnt_id']
        movieCmnt.objects.filter(id=cmnt_id).update(status="Deactivate")
        return JsonResponse("OK",safe=False)

def addMovies(request):
    if request.method == "POST":
        movie_data=json.loads(request.body)
        # mail_id=user_data['mail_id']
        # if movieList.objects.filter(mail_id=mail_id).exists():
        #     return JsonResponse("EMAIL ALREADY REGISTERED",safe=False)
        # else:
        movieList.objects.create(**movie_data)
        return JsonResponse("OK",safe=False)


def edit_movie(request):
    if request.method=="POST":
        edit_data=json.loads(request.body)
        movie_name=edit_data['movie_name']
        img_url=edit_data['img_url']
        url=edit_data['url']
        title=edit_data['title']
        movieList.objects.filter(movie_name=movie_name).update(img_url=img_url, url=url, title=title)
        return JsonResponse("OK",safe=False)
