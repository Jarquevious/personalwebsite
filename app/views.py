from django.shortcuts import render

def home(request):
    context = {}
    return render(request, 'app/index.html', context)

def about(request):
    context = {}
    return render(request, 'app/AboutMe.html', context)

def contact(request):
    context = {}
    return render(request, 'app/ContactMe.html', context)

def myproject(request):
    context = {}
    return render(request, 'app/MyProject.html', context)

def myresume(request):
    context = {}
    return render(request, 'app/myresume.html', context)
