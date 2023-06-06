from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from cliente_crud import views

router = routers.DefaultRouter()
router.register(r'cliente_crud',views.ClienteView,'cliente_crud')
urlpatterns = [
    path("api/v1/",include(router.urls)),
    path('docs/',include_docs_urls(title="cliente_crud API"))
    
]
