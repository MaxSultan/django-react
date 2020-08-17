from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.db.models.functions import Coalesce
from django.core.validators import MaxValueValidator, MinValueValidator


class Movie(models.Model):
    title = models.CharField(_('Movie\'s title'), max_length=255)
    year = models.PositiveIntegerField(default=2019)
    rated = models.CharField(max_length=64)
    released_on = models.DateField(_('Release Date'))
    genre = models.CharField(max_length=255)
    director = models.CharField(max_length=255)
    plot = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    # Todo: add Rating models
    def rating_avg(self):
        return Rating.objects.filter(movie=self).aggregate(
                avg=Coalesce(models.Avg('number'), 0),
            )['avg']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('movies:detail', kwargs={'id': self.pk}) 


class Rating(models.Model):

    number = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(0)
        ]
    )
    comment = models.CharField(max_length=200, default='')
    movie = models.ForeignKey(Movie, default=1, related_name='ratings',on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.number} {self.comment}'