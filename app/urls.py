# users/urls.py

from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contactme'),
    path('myproject/', myproject, name='myproject'),
    path('myresume/', myresume, name='myresume'),
    ]