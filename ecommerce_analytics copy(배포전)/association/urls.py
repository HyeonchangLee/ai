from . import views
from django.urls import path,include

app_name = 'association'
urlpatterns = [
    path('grocery/', views.grocery, name='grocery'),
    path('best_combinations/', views.best_combinations, name='best_combinations'),
    # path('chart_data/', views.chart_data, name='chart_data'), 
    # #MY분석 페이지.
    # path('myAPage/', views.myAPage, name='myAPage'),
]
