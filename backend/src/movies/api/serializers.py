from rest_framework import serializers
from movies.models import Movie, Rating

class MovieSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Movie
        fields = ('title', 'year', 'rated', 'released_on', 'genre', 'director', 'plot', 'rating_avg')


class RatingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Rating
        fields = ('number', 'comment', 'movie')