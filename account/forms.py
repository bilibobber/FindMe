from django import forms

class Login_form(forms.Form):
    login = forms.CharField(label='login', max_length=15)
    password = forms.CharField(label='password', max_length=20, widget=forms.PasswordInput)
