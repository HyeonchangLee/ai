
from django.urls import path,include
from . import views

app_name = 'app1'
urlpatterns = [
    path('movie/',views.movie, name="movie"),
]

