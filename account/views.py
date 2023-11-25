from django.shortcuts import render
from .forms import Login_form
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

def User_login(request):
    if request.method == "POST": # Если запрос POSt
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
        else: # Если поле не пустое
            return HttpResponse('Неверный логин') # Вернуть "Неверный логин"
    else: # если запрос GET
        form = Login_form() # Если запрос get - то форму не используем
    return render(request, 'account/register/index.html', {'form': form})