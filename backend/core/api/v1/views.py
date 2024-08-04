from rest_framework import generics
from rest_framework.response import Response

from core.models import (
    Song,
    Playlist,
    PlaylistItem,
)
from core.api.v1.filters import (
    SongFilter,
)
from core.api.v1.serializers import (
    SongSerializer,
)

class SongListCreateView(generics.ListCreateAPIView):
    queryset = Song.objects.all().order_by("id")
    serializer_class = SongSerializer
    filterset_class = SongFilter
    pagination_class = None
