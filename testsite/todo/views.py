from django.shortcuts import render
# Create your views here.
from rest_framework import generics, status
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.response import Response

class TodoList(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDestroy(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    http_method_names = ['delete']

    def delete(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)