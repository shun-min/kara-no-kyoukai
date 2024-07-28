from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    album = models.CharField(
        max_length=100
        null=True,
        blank=True,
    )
    language = models.CharField(max_length=30)
    hitcounts = models.IntegerField(default=0)


class Playlist(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(
        max_length=50,
        default="Recent",
    )


class PlaylistItem(models.Model):
    name = models.CharField(max_length=100)
    song = models.ForeignKey(
        Song,
        on_delete=models.PROTECT,
    )
    playlist = models.ForeignKey(
        Playlist,
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    order = models.IntegerField(
        default=1,
    )

    class Meta:
        unique_together = ('playlist', 'order')
    
    def __str__(self):
        return str(f"{self.name} - {self.order}")
