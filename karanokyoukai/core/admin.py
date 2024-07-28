from django.contrib import admin

from core.models import (
    Song,
    Playlist
)
# Register your models here.


# class SongFields(admin.ModelAdmin):
#     list_display = [f.name for f in Song._meta.fields]
#     search_fields = ('song_name',)

admin.site.register(Song)
admin.site.register(Playlist)