from django.urls import path, include

from api.jobs.views import PostNewJob

app_name = 'jobs'

urlpatterns = [
    path('newjob/', PostNewJob.as_view(), name='new-job'),
]
