from rest_framework import serializers
from movies.models import Movie, Rating


class RatingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Rating
        fields = ['id','number', 'comment', 'movie']

class MovieSerializer(serializers.ModelSerializer):
    # ratings = serializers.StringRelatedField(many=True)
    ratings = RatingSerializer(many=True)
    class Meta: 
        model = Movie
        fields = ('id','title', 'year', 'rated', 'released_on', 'genre', 'director', 'plot', 'rating_avg', 'ratings')

        def create(self, validated_data):
            ratings_data = validated_data.pop('ratings')
            movie = Movie.objects.create(**validated_data)
            for rating_data in ratings_data:
                Rating.objects.create(movie=movie, **rating_data)
            return movie

