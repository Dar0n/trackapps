# Generated by Django 2.0.7 on 2018-07-20 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0005_auto_20180720_1413'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='response_date',
            field=models.DateField(blank=True, null=True, verbose_name='response_date'),
        ),
    ]