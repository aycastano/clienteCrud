# Generated by Django 4.2.1 on 2023-06-02 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombrecompleto', models.TextField(max_length=255)),
                ('email', models.TextField(max_length=255)),
                ('fechanacimiento', models.TextField(max_length=8)),
                ('fechacreacion', models.TextField(max_length=8)),
            ],
        ),
    ]
