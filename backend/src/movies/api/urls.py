from django.urls import path
from movies.api.views import MovieViewSet, RatingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', MovieViewSet, basename='movies')
urlpatterns = router.urls

# from .views import (
#     MovieDetailView, 
#     MovieListView, 
#     RatingDetailView, 
#     RatingListView, 
#     MovieCreateView, 
#     MovieDeleteView, 
#     RatingCreateView, 
#     MovieUpdateView
# )

# urlpatterns = [
#     path('', MovieListView.as_view()),
#     path('create/', MovieCreateView.as_view()),
#     path('<pk>/update/', MovieUpdateView.as_view()),
#     path('<pk>/delete/', MovieDeleteView.as_view()),
#     path('<pk>/ratings/', RatingListView.as_view()),
#     path('<pk>/ratings/create/', RatingCreateView.as_view()),
# ]


