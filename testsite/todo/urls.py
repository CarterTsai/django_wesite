from django.urls import path
from . import views


urlpatterns = [
    path('', views.TodoList.as_view(), name='get_todo_list'),
    path('<int:pk>/', views.TodoDestroy.as_view(), name='delete_todo'),
]