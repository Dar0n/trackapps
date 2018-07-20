# Generated by Django 2.0.7 on 2018-07-19 14:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import project.user.helpers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=project.user.helpers.code_generator, help_text='Random code used for registration and for password reset', max_length=15, verbose_name='code')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_profile', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]
