from django.urls import path
from .views import managerLogin, moviesList

urlpatterns = [
    path('login/', managerLogin),
    path('allmovies/', moviesList)
]
