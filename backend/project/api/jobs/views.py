from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from api.jobs.serializers import JobSerializer
from project.jobs.models import Job


class PostNewJobView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request, **kwargs):
        serializer = JobSerializer(data=request.data,
                                          context={
                                              "request": request
                                          }, )  # passing request to the context of serializer
        serializer.is_valid(raise_exception=True)
        job = serializer.create(serializer.validated_data)
        return Response(JobSerializer(job).data)

class GetUpdateDeleteJobView(GenericAPIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request, job_id):
        job = Job.objects.get(id=job_id)
        serializer = JobSerializer(job)
        return Response(serializer.data)

    def post(self, request, job_id):
        job = Job.objects.get(id=job_id)
        # self.check_object_permissions(request, review)
        serializer = JobSerializer(job, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, job_id):
        review = Job.objects.get(id=job_id)
        # self.check_object_permissions(request, review)
        review.delete()
        return Response("OK")

class GetListOfJobsView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request):
        jobs = Job.objects.filter(user_profile=request.user.user_profile)
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)