from rest_framework import serializers

from project.jobs.models import Job


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = ['id', 'title', 'company', 'date_applied',
                  'application_state', 'response', 'response_date', 'comments']

    def create(self, validated_data):

        job = Job.objects.create(
            # **validated_data,
            user_profile=self.context['request'].user.user_profile,
            title=validated_data.get("title"),
            company=validated_data.get("company"),
            date_applied=validated_data.get("date_applied"),
            application_state=validated_data.get("application_state"),
            response=validated_data.get("response"),
            response_date=validated_data.get("response_date"),
            comments=validated_data.get("comments"),

            # alternative way to pass all the fields is to use
            # just **validated_data
        )

        return job
