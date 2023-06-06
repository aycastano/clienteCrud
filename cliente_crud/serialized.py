from rest_framework import serializers
from .models import cliente

class clienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = cliente
        #fields = ('id','nombrecompleto','email','fechanacimiento','fechacreacion')
        fields = '__all__'