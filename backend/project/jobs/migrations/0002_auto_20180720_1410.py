# Generated by Django 2.0.7 on 2018-07-20 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='comments',
            field=models.TextField(blank=True, verbose_name='comments'),
        ),
        migrations.AlterField(
            model_name='job',
            name='date_applied',
            field=models.DateField(blank=True, verbose_name='created'),
        ),
        migrations.AlterField(
            model_name='job',
            name='response',
            field=models.TextField(blank=True, verbose_name='response'),
        ),
        migrations.AlterField(
            model_name='job',
            name='response_date',
            field=models.DateTimeField(blank=True, verbose_name='response_date'),
        ),
    ]
