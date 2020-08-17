from django.urls import path

from .views import MovieDetailView, MovieListView, RatingDetailView, RatingListView

urlpatterns = [
    path('', MovieListView.as_view()),
    path('<pk>', MovieDetailView.as_view()),
    path('<pk>', RatingListView.as_view()),
]