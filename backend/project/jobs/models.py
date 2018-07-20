from django.conf import settings
from django.db import models

class Job(models.Model):
    user_profile = models.ForeignKey(
        verbose_name='User profile',
        to='user.UserProfile',
        on_delete=models.CASCADE,
        related_name='jobs',
        null=True,
    )
    title = models.CharField(
        verbose_name='Job title',
        max_length=200,
        blank=True,
    )
    company = models.CharField(
        verbose_name='Company name',
        max_length=100,
        blank=True,
    )
    date_applied = models.DateTimeField(
        verbose_name="created",
    )
    application_state = models

    def __str__(self):
        return f'{self.name}'
