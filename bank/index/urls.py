from django.contrib import admin
from django.urls.resolvers import URLPattern
from django.urls import path
from.import views
urlpatterns = [
    path('',views.index,name="index"),
    path('privacy-policy/',views.privacypolicy,name="privacypolicy"),
]