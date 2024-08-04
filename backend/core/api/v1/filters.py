from django.db.models import QuerySet
from django_filters import rest_framework as filters

from core.models import (
    Song,
)


class SongFilter(filters.FilterSet):
    # artist__name = filters.CharFilter(
        # method = "getSongsByArtist", 
        # label="Group By Artist",
    #     lookup_expr="icontains",
    # )
    class Meta:
        model = Song
        fields = [
            'artist__name', 
            'language__value',
        ]

    def getSongsByArtist(self, queryset: QuerySet, name, value: str):
        song_ids = Song.objects.filter(
            artist=value,
        ).value_list("song_id", flat=True)
        if song_ids:
            return queryset.filter(id__in=song_ids)

        return queryset.none()
        