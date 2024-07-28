from rest_framework import serializers

from core.models import (
    Playlist,
    PlaylistItem,
    Song,
)


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"