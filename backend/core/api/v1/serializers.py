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
    album = ForeignKeySerializer(view_name="album-details-v1", read_only=True)
    artist = ForeignKeySerializer(view_name="artist-details-v1", read_only=True)
    genre = ForeignKeySerializer(view_name="genre-details-v1", read_only=True)
    language = ForeignKeySerializer(view_name="language-details-v1", read_only=True)
    class Meta:
        model = Song
        fields = "__all__"

    def validate(self, attrs):
        if self.context["request"].method == "PUT" and self.instance:
            name = attrs.get("name")
            album = attrs.get("album", self.instance.album)
            artist = attrs.get("artist", self.instance.artist)
            language = attrs.get("language", self.instance.language)
            if name != self.instance.name:
                _ = Song.filter(
                    name=name,
                    album=album,
                    artist=artist,
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
