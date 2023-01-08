from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def Home(request):
    return HttpResponse('<h1>Blog Home</h1>')


def About(request):
    return HttpResponse('<h1>Blog About</h1>')
