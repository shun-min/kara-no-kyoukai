from rest_framework import serializers

from core.models import (
    Album,
    Artist,
    Genre,
    Language,
    Playlist,
    PlaylistItem,
    Song,
)


class ForeignKeySerializer(serializers.HyperlinkedRelatedField):
    def to_representation(self, instance):
        request = self.context.get("request")
        url = super().to_representation(instance)
        return {
            "id": instance.pk,
            "url": url,
        }


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = "__all__"


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = "__all__"


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"

    def validate(self, attrs):
        if self.context["request"].method == "PUT" and self.instance:
            name = attrs.get("name")
            album = attrs.get("language", self.instance.album)
            language = attrs.get("language", self.instance.language)
            if name != self.instance.name:
                _ = Song.filter(
                    name=name,
                    album=album,
                    language=language,
                )
            else:
                raise serializers.ValidationError
        return attrs


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = "__all__"
        extra_kwargs = {
            "url": {
                "view_name": "playlist-details-v1",
            }
        }

class PlaylistItemSerializer(serializers.ModelSerializer):
    playlist = ForeignKeySerializer(view_name="playlist-details-v1", read_only=True)
    class Meta:
        model = PlaylistItem
        fields = "__all__"
        extra_kwargs = {
            "url": {"view_name": "playlistitem-details-v1"},
        }
