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
admin.site.register(Playlist)
admin.site.register(PlaylistItem)
admin.site.register(Song)