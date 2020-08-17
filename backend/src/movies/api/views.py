# from rest_framework.generics import (
#     ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, CreateAPIView
# )
from rest_framework import viewsets
from movies.models import Movie, Rating
from .serializers import MovieSerializer, RatingSerializer


class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class RatingViewSet(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


# class MovieListView(ListAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer


# class MovieCreateView(CreateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer


# class MovieUpdateView(UpdateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer


# class MovieDeleteView(DestroyAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer


# class MovieDetailView(RetrieveAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer


# class RatingListView(ListAPIView):
#     queryset = Rating.objects.all()
#     serializer_class = RatingSerializer


# class RatingDetailView(RetrieveAPIView):
#     queryset = Rating.objects.all()
#     serializer_class = RatingSerializer


# class RatingCreateView(CreateAPIView):
#     queryset = Rating.objects.all()
#     serializer_class = RatingSerializer

