from rest_framework import generics
from rest_framework.response import Response

from core.models import (
    Song,
    Playlist,
    PlaylistItem,
)
# from core.api.v1.filters import (
#     SongFilter,
# )
from core.api.v1.serializers import (
    SongSerializer,
    PlaylistSerializer,
    PlaylistItemSerializer,
)

class SongListCreateView(generics.ListCreateAPIView):
    queryset = Song.objects.all().order_by("id")
    serializer_class = SongSerializer
    # filterset_class = SongFilter
    filterset_fields = ['name']
    pagination_class = None


class PlaylistListCreateView(generics.ListCreateAPIView):
    queryset = Playlist.objects.all().order_by("id")
    serializer_class = PlaylistSerializer,
    filterset_fields = ['name']
    pagination_class = None


class PlaylistItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlaylistItem.objects.all().order_by("id")
    serializer_class = PlaylistItemSerializer
    filterset_fields = ['playlist__id']
    pagination_class = None