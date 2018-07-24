from django.contrib import admin
from django.urls import path, include

mypatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('project.api.urls', namespace='api')),
]

urlpatterns = [
    path('backend/', include(mypatterns)),
]