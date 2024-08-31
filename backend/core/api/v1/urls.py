from django.urls import path

from core.api.v1.views import (
    SongListCreateView,
    PlaylistListCreateView,
    PlaylistItemRListCreateView,
    PlaylistItemRetrieveUpdateDestroyView,
)


urlpatterns = [
    path(
        "songs/",
        SongListCreateView.as_view(),
        name="song-list-create-v1",
    ),
    path(
        "playlists/",
        PlaylistListCreateView.as_view(),
        name="playlist-list-create-v1",
    ),
    path(
        "playlist/<int:pk>/",
        PlaylistListCreateView.as_view(),
        name="playlist-details-v1",
    ),
    path(
        "playlistitem/",
        PlaylistItemRListCreateView.as_view(),
        name="playlistitem-list-create-v1",
    ),
    path(
        "playlistitem/<int:pk>/",
        PlaylistItemRetrieveUpdateDestroyView.as_view(),
        name="playlistitem-details-v1",
    ),
]