# Generated by Django 2.1.1 on 2018-09-11 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
