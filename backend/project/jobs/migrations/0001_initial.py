# Generated by Django 2.0.7 on 2018-07-20 13:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, verbose_name='Job title')),
                ('company', models.CharField(blank=True, max_length=100, verbose_name='Company name')),
                ('date_applied', models.DateTimeField(verbose_name='created')),
                ('application_state', models.CharField(choices=[('Applied', 'Applied'), ('Rejected', 'Rejected'), ('Wishlist', 'Wishlist'), ('Phone interview', 'Phone interview'), ('Live interview', 'Live interview'), ('Offer', 'Offer')], max_length=20, verbose_name='application_state')),
                ('response', models.TextField(verbose_name='response')),
                ('response_date', models.DateTimeField(verbose_name='response_date')),
                ('comments', models.TextField(verbose_name='comments')),
                ('user_profile', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='user.UserProfile', verbose_name='User profile')),
            ],
            options={
                'verbose_name': 'Job description',
                'ordering': ['date_applied'],
            },
        ),
    ]