import django_filters
from django.db.models import QuerySet

from core.models import (
    Song,
)


class SongFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(
        # method = "getSongsByArtist", 
        # label="Group By Artist",
        lookup_expr='iexact',
    )
    language__value = django_filters.CharFilter(
        field_name='language',
        lookup_expr='contains',
    )
    class Meta:
        model = Song
        fields = [
            'language',
            'name',
        ]

    def getSongsByArtist(self, queryset: QuerySet, language: str):
        # return queryset.filter(artist__name__in=artist_name)
        return queryset.filter(language__value__in=language)
        