from django.conf.urls import url
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from project.api.auth.views import RegistrationView, RegistrationValidationView

app_name = 'auth'

urlpatterns = [
    path('token/', obtain_jwt_token),
    url(r'^token/refresh/', refresh_jwt_token),
    url(r'^token/verify/', verify_jwt_token),
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('registration/validation/', RegistrationValidationView.as_view(), name='registration-validation'),
]
