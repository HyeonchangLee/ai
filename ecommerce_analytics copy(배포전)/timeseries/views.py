from django.shortcuts import render

# Create your views here.

def prophet(request):
    return render(request ,'prophet.html')