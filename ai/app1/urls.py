
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.ListPost.as_view()),
    path('<int:pk>/',views.DetailPost.as_view()),
]

