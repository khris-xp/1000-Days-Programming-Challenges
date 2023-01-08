from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def say_hello(req):
    return HttpResponse("Hello World!")
