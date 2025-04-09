from django.contrib import admin

from core.models import (
    Album,
    Artist,
    Genre,
    Language,
    Playlist,
    PlaylistItem,
    Song,
)
# Register your models here.

admin.site.register(Album)
admin.site.register(Artist)
admin.site.register(Genre)
admin.site.register(Language)

class PlaylistFields(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
    )
admin.site.register(Playlist, PlaylistFields)

class PlaylistItemFields(admin.ModelAdmin):
    list_display = (
        "id",
        "order",
        "playlist",
        "song",
    )
admin.site.register(PlaylistItem, PlaylistItemFields)

class SongFields(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "language",
        "album",
    )
admin.site.register(Song, SongFields)