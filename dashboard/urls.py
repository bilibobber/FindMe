from django.urls import path
from django.contrib.auth import views as auth_views
from . import views # чтобы использовать views.(имя функции в views). хотя можно и from viwes import (имя функции во views).


urlpatterns = [
    path('index/', views.index, name='dashboard')
]
