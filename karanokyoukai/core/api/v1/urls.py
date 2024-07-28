from django.urls import path

from core.api.v1.views import (
    SongListCreateView,
)


urlpatterns = [
    path(
        "songs/",
        SongListCreateView.as_view(),
        name="song-list-create-v1",
    ),
]