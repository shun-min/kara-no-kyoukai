from django.urls import path

from core.api.v1.views import (
    AlbumListCreateView,
    AlbumRetrieveUpdateDestroyView,
    ArtistListCreateView,
    ArtistRetrieveUpdateDestroyView,
    GenreListCreateView,
    GenreRetrieveUpdateDestroyView,
    LanguageListCreateView,
    LanguageRetrieveUpdateDestroyView,
    SongListCreateView,
    SongRetrieveUpdateDestroyView,
    PlaylistListCreateView,
    PlaylistItemListCreateView,
    PlaylistItemRetrieveUpdateDestroyView,
)


urlpatterns = [
    path(
        "albums/",
        AlbumListCreateView.as_view(),
        name="album-list-create-v1",
    ),
    path(
        "albums/<int:pk>/",
        AlbumRetrieveUpdateDestroyView.as_view(),
        name="album-detail-v1",
    ),
    path(
        "artists/",
        ArtistListCreateView.as_view(),
        name="artist-list-create-v1",
    ),
    path(
        "artists/<int:pk>/",
        ArtistRetrieveUpdateDestroyView.as_view(),
        name="artist-detail-v1",
    ),
    path(
        "genres/",
        GenreListCreateView.as_view(),
        name="genre-list-create-v1",
    ),
    path(
        "genres/<int:pk>/",
        GenreRetrieveUpdateDestroyView.as_view(),
        name="genre-detail-v1",
    ),
    path(
        "languages/",
        LanguageListCreateView.as_view(),
        name="language-list-create-v1",
    ),
    path(
        "languages/<int:pk>/",
        LanguageRetrieveUpdateDestroyView.as_view(),
        name="language-detail-v1",
    ),
    path(
        "playlists/",
        PlaylistListCreateView.as_view(),
        name="playlist-list-create-v1",
    ),
    path(
        "playlist/<int:pk>/",
        PlaylistListCreateView.as_view(),
        name="playlist-detail-v1",
    ),
    path(
        "playlistitem/",
        PlaylistItemListCreateView.as_view(),
        name="playlistitem-list-create-v1",
    ),
    path(
        "playlistitem/<int:pk>/",
        PlaylistItemRetrieveUpdateDestroyView.as_view(),
        name="playlistitem-detail-v1",
    ),
    path(
        "songs/",
        SongListCreateView.as_view(),
        name="song-list-create-v1",
    ),
    path(
        "songs/<int:pk>/",
        SongRetrieveUpdateDestroyView.as_view(),
        name="song-detail-v1",
    ),
]