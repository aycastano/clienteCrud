from rest_framework import viewsets
from .serialized import clienteSerializer
from .models import cliente

# Create your views here.
class ClienteView(viewsets.ModelViewSet):
    serializer_class = clienteSerializer
    queryset =  cliente.objects.all()