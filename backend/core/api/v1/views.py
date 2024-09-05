from rest_framework import generics, status
from rest_framework.response import Response

from core.models import (
    Album,
    Artist,
    Genre,
    Language,
    Song,
    Playlist,
    PlaylistItem,
)
# from core.api.v1.filters import (
#     SongFilter,
# )
from core.api.v1.serializers import (
    AlbumSerializer,
    ArtistSerializer,
    SongSerializer,
    PlaylistSerializer,
    PlaylistItemSerializer,
)


class AlbumListCreateView(generics.ListCreateAPIView):
    queryset = Album.objects.all().order_by("id")
    serializer_class = AlbumSerializer
    filterset_fields = ['name']
    pagination_class = None


class ArtistListCreateView(generics.ListCreateAPIView):
    queryset = Artist.objects.all().order_by("id")
    serializer_class = ArtistSerializer
    filterset_fields = ['name']
    pagination_class = None


class ArtistRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all().order_by("id")
    serializer_class = ArtistSerializer
    filterset_fields = ['name']
    pagination_class = None
    extra_args = {
        "url": "artist-detail-v1",
    }


class SongListCreateView(generics.ListCreateAPIView):
    queryset = Song.objects.all().order_by("id")
    serializer_class = SongSerializer
    # filterset_class = SongFilter
    filterset_fields = ['name']
    pagination_class = None


class SongRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all().order_by("id")
    serializer_class = SongSerializer
    filterset_fields = ['name']
    pagination_class = None


class PlaylistListCreateView(generics.ListCreateAPIView):
    queryset = Playlist.objects.all().order_by("id")
    serializer_class = PlaylistSerializer
    filterset_fields = ['name']
    pagination_class = None


# class Playlist(generics.RetrieveUpdateDestroyAPIView):



class PlaylistItemRListCreateView(generics.ListCreateAPIView):
    queryset = PlaylistItem.objects.all().order_by("id")
    serializer_class = PlaylistItemSerializer
    filterset_fields = ['playlist__id']
    pagination_class = None


class PlaylistItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlaylistItem.objects.all().order_by("id")
    serializer_class = PlaylistItemSerializer
    pagination_class = None

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance_id = instance.id
        instance.delete()
        data = {
            "message": f"Object with ID {instance_id} has been deleted. "
        }

        return Response(data, status=status.HTTP_204_NO_CONTENT)