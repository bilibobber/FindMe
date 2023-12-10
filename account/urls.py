from django.urls import path
from django.contrib.auth import views as auth_views
from . import views # чтобы использовать views.(имя функции в views). хотя можно и from viwes import (имя функции во views).


urlpatterns = [
    path('login/', views.user_login, name='login'),#здесь у нас была наша функция, которая активировалась при входе на сайт
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),  # встроенная функция от джанго для выхода
]

#path('login/', auth_views.LoginView.as_view(), name='login'),  # встроенная функция от джанго для входа
