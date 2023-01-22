from . import views
from django.urls import path,include

app_name = 'recommendation'
urlpatterns = [
    path('movie/', views.movie, name='movie'),
    path('rec_1_pop/', views.rec_1_pop, name='rec_1_pop'),
    # path('rec_2/', views.rec_2, name='rec_2'),
    # path('hidden_game/', views.hidden_game, name='hidden_game'),
    # path('chart_main/', views.chart_main, name='chart_main'), #서울시 전체 매출추이
    # path('chart_data/', views.chart_data, name='chart_data'), 
    # #MY분석 페이지.
    # path('myAPage/', views.myAPage, name='myAPage'),
]
