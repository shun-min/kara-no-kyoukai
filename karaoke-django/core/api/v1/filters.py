import django_filters
from django.db.models import QuerySet
from django_filters import rest_framework
from rest_framework import generics

from core.models import (
    Song,
)


# class SongFilter(rest_framework.FilterSet):
#     class Meta:
#         model = Song
#         fields = [
#             'name',
#         ]

    # def getSongsByArtist(self, queryset: QuerySet, language: str):
        # return queryset.filter(artist__name__in=artist_name)
        