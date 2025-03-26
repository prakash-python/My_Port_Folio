from django.shortcuts import render

# Create your views here.
def port(request):
    return render(request,'port.html')