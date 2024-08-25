from rest_framework import serializers

from core.models import (
    Playlist,
    PlaylistItem,
    Song,
)


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = "__all__"


class PlaylistItemSerializer(serializers.ModelSerializer):
    playlist = serializers.HyperlinkedRelatedField(view_name="playlist-list-create-v1", read_only=True)
    class Meta:
        model = PlaylistItem
        fields = "__all__"
    