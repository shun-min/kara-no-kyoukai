# Generated by Django 5.0.7 on 2024-10-19 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_remove_playlistitem_name'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='song',
            unique_together={('artist', 'name', 'album')},
        ),
        migrations.AddField(
            model_name='song',
            name='youtube_link',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='song',
            name='path',
            field=models.TextField(blank=True, null=True),
        ),
    ]
