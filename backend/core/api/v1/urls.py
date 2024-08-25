from django.urls import path

from core.api.v1.views import (
    SongListCreateView,
    PlaylistListCreateView,
    PlaylistItemRetrieveUpdateDestroyView,
)


urlpatterns = [
    path(
        "songs/",
        SongListCreateView.as_view(),
        name="song-list-create-v1",
    ),
    path(
        "playlist/create/",
        PlaylistListCreateView.as_view(),
        name="playlist-list-create-v1",
    ),
    path(
        "playlistitem/add",
        PlaylistItemRetrieveUpdateDestroyView.as_view(),
        name="playlistitem-list-create-v1",
    ),
]