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
    date_applied = models.DateField(
        verbose_name="applied",
        null=True,
        blank=True,
    )
    APPLIED = 'Applied'
    REJECTED = 'Rejected'
    WISHLIST = 'Wishlist'
    PHONE_INTERVIEW = 'Phone interview'
    LIVE_INTERVIEW = 'Live interview'
    OFFER = 'Offer'
    state_options = (
        (APPLIED, 'Applied'),
        (REJECTED, 'Rejected'),
        (WISHLIST, 'Wishlist'),
        (PHONE_INTERVIEW, 'Phone interview'),
        (LIVE_INTERVIEW, 'Live interview'),
        (OFFER, 'Offer'),
    )
    application_state = models.CharField(
        verbose_name="application_state",
        max_length=20,
        choices=state_options,
    )
    response = models.TextField(
        verbose_name='response',
        blank=True,
    )
    response_date = models.DateField(
        verbose_name='response_date',
        null=True,
        blank=True,
    )
    comments = models.TextField(
        verbose_name='comments',
        blank=True,
    )

    class Meta:
        verbose_name = "Job description"
        ordering = ["date_applied"]

    def __str__(self):
        return f'{self.title}'
