from django.db import models

class Account(models.Model):
    AccountLogin = models.CharField('Имя', max_length=15)
    AccountEmail = models.EmailField('Почта', max_length=30)
    AccountPassword = models.CharField('Пароль', max_length=20)

    def __str__(self):
        return self.AccountLogin

    class Meta:
        verbose_name = 'Аккаунт'
        verbose_name_plural = 'Аккаунты'