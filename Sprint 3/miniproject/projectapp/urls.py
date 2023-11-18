from django.urls import path

from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('userinput', views.userinput, name="userinput"),
    path('predict',views.predict,name="predict"),
]
