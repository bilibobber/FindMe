from django.shortcuts import render
from .forms import LoginForm
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required




def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():  # функция пайтона, проверка на валидность данных
            cd = form.cleaned_data  # cd - cleaned data - удалить значения
            user = authenticate(request, login=cd['login'], password=cd['password'])  # функция пайтона, которая
            # проверяет данные и возвращает объект user

        if user is not None:  # проверка по имени User из списка юзеров
            if user.is_active:  # функция пайтона
                login(request, user)  # login - функция Пайтона
                return HttpResponse('Authenticated successfully')  # доступ получен
            else:
                return HttpResponse('Disabled account')  # аккаунт деактивирован
        else:  # имя user не найден в списках
            return HttpResponse('Invalid login')  # неверный логин

    else:
        form = LoginForm()
    return render(request, 'account/register/index.html', {'form': form})


'''
def User_login(request):
    if request.method == "POST": # Если запрос POST
        form = Login_form(request.POST)
        if form.is_valid():   # Если форма валидна
            cd = form.cleaned_data   # cd - очистить форму
        user = authenticate(request, login=cd['login'], password=cd['password'])

        if user is not None:
            if user.is_active: # Проверка на активность
                login(request, user) #
                return HttpResponse('Доступ получен') # Вернуть "доступ получен"
            else:  # Если юзер не активен
                return HttpResponse('Аккаунт деактивирован') # Вернуть "Аккаунт деактивирован"
        else: # Если поле пустое
            return HttpResponse('Неверный логин') # Вернуть "Неверный логин"
    else: # если запрос GET
        form = Login_form() # Если запрос get - то форму не используем
    return render(request, 'account/register/index.html', {'form': form})
'''