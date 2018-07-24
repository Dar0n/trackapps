from django.urls import path, include

from api.jobs.views import PostNewJobView, GetUpdateDeleteJobView, GetListOfJobsView

app_name = 'jobs'

urlpatterns = [
    path('newjob/', PostNewJobView.as_view(), name='new-job'),
    path('job/<int:job_id>/', GetUpdateDeleteJobView.as_view(), name='get-update-delete-jobs'),
    path('listjobs/', GetListOfJobsView.as_view(), name='get-all-jobs'),
]
