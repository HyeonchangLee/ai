from . import views
from django.urls import path,include

app_name = 'nlp'
urlpatterns = [
    path('reply/', views.reply, name='reply'),
    path('input_word/', views.input_word, name='input_word'),
    # path('chart_main/', views.chart_main, name='chart_main'), #서울시 전체 매출추이
    # path('chart_data/', views.chart_data, name='chart_data'), 
    # #MY분석 페이지.
    # path('myAPage/', views.myAPage, name='myAPage'),
]
