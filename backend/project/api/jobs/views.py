from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from api.jobs.serializers import JobSerializer


class PostNewJob(APIView):
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