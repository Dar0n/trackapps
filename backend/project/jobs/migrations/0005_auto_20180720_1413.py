# Generated by Django 2.0.7 on 2018-07-20 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_auto_20180720_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='date_applied',
            field=models.DateField(blank=True, null=True, verbose_name='applied'),
        ),
        migrations.AlterField(
            model_name='job',
            name='response_date',
            field=models.DateTimeField(blank=True, null=True, verbose_name='response_date'),
        ),
    ]
