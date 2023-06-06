from django.db import models

# Create your models here.
class cliente(models.Model):
    nombrecompleto = models.TextField(max_length=255)
    email          = models.TextField(max_length=255)
    fechanacimiento = models.TextField(max_length=8)
    fechacreacion   = models.TextField(max_length=8)
    
    def __str__(self):
        return self.nombrecompleto
  