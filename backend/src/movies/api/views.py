from rest_framework.generics import ListAPIView, RetrieveAPIView
from movies.models import Movie, Rating
from .serializers import MovieSerializer, RatingSerializer

class MovieListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class MovieDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class RatingListView(ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class RatingDetailView(RetrieveAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
