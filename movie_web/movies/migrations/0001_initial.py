# Generated by Django 3.0.8 on 2020-07-21 17:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0003_user_age'),
        ('manager', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='movies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=500)),
                ('title', models.CharField(max_length=100)),
                ('status', models.CharField(default='OK', max_length=100)),
                ('manager', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manager.manager')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='user.user')),
            ],
        ),
    ]
