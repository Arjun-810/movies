# Generated by Django 3.0.8 on 2020-07-22 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0007_auto_20200722_0151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='status',
            field=models.CharField(default='ok', max_length=100),
        ),
    ]
