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
        # extra_kwargs = {
        #     "url": {"view_name", "song-detail"}
        # }