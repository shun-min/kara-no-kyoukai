from rest_framework import serializers

from core.models import (
    Playlist,
    PlaylistItem,
    Song,
)


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'name']
    