from django.urls import path
from .views import movie, movieLists, movieCmnts, viewCmnt, allcomments, delet_commments, delet_movie, addMovies, edit_movie

urlpatterns = [
    path('view/', movie),
    path('list/', movieLists),
    path('comment/', movieCmnts),
    path('viewComment/', viewCmnt),
    path('allcmnts/', allcomments),
    path('deletCommments/', delet_commments),
    path('deletMovie/', delet_movie),
    path('add/', addMovies),
    path('edit/', edit_movie),
]
