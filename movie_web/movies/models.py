from django.db import models
from manager.models import manager
from user.models import user

class movieList(models.Model):
    # movies=models.ForeignKey(movies,null=True,on_delete=models.SET_NULL)
    manager=models.ForeignKey(manager,null=True,on_delete=models.SET_NULL)
    user=models.ForeignKey(user,null=True,on_delete=models.SET_NULL)
    img_url=models.CharField(max_length=500)
    movie_name=models.CharField(max_length=100)
    url=models.CharField(max_length=500, default="none")
    title=models.CharField(max_length=500, default="none")
    status = models.CharField(max_length=100, default="ok")



class movieCmnt(models.Model):
    movieList=models.ForeignKey(movieList,null=True,on_delete=models.SET_NULL)
    manager=models.ForeignKey(manager,null=True,on_delete=models.SET_NULL)
    user=models.ForeignKey(user,null=True,on_delete=models.SET_NULL)
    comments=models.CharField(max_length=500)
    status = models.CharField(max_length=100, default="ok")
    


