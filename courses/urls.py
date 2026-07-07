from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('slides/', views.slides, name='slides'),
    path('assignments/', views.assignments, name='assignments'),
]
