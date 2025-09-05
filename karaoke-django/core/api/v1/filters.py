from django.db.models import QuerySet
from django_filters import rest_framework
from django_filters import rest_framework as filters

from core.models import (
    Song,
)


class SongFilter(rest_framework.FilterSet):
    language = filters.CharFilter(
        method="getSongByLanguage",
        label="Song Language",
        distinct=True,
    )
    artist = filters.CharFilter(
        method="getSongByArtist",
        label="Song Artist",
        distinct=True,
    )
    genre = filters.CharFilter(
        method="getSongByGenre",
        label="Song Genre",
        distinct=True,
    )
    genre = filters.CharFilter(
        method="getSongByAlbum",
        label="Song Album",
        distinct=True,
    )
    

    class Meta:
        model = Song
        fields = [
            'name',
        ]

    def getSongByLanguage(
        self,
        queryset: QuerySet,
        name,
        value:str,
    ):
        return queryset.filter(language__name=value)
        
    def getSongByArtist(self, queryset: QuerySet, name, value: str):
        return queryset.filter(artist__name=value)
    
    def getSongByGenre(self, queryset: QuerySet, name, value: str):
        return queryset.filter(genre__name=value)

    def getSongByAlbum(self, queryset: QuerySet, name, value: str):
        return queryset.filter(album__name=value)
