from django.db import models

# Create your models here.
class Album(models.Model):
    name = models.CharField(max_length=100)
    publication_year = models.IntegerField(
        null=True,
        blank=True,
    )


class Artist(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Genre(models.Model):
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.value


class Language(models.Model):
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.value
    

class Song(models.Model):
    name = models.CharField(max_length=100)
    album = models.ForeignKey(
        Album,
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    artist = models.ForeignKey(
        Artist,
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    genre = models.ForeignKey(
        Genre,
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    hitcounts = models.IntegerField(default=0)
    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )
    path = models.TextField()

    class Meta:
        unique_together = ('artist', 'name')
    
    def __str__(self):
        return self.name


class Playlist(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(
        max_length=50,
        default="Recent",
    )
    def __str__(self):
        return self.name


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
