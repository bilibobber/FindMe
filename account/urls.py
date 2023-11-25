from django.urls import path
from . import views # чтобы использовать views.(имя функции в views). хотя можно и from viwes import (имя функции во views).

urlpatterns = [
    path('login/', views.User_login, name='login'),
]
