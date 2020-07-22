from django.urls import path
from .views import userLogin, userRegistration

urlpatterns = [
    path('login/', userLogin),
    path('registration/', userRegistration)
]
