from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import  User
from .models import Product
from .serializers import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# from .products import products
# not needed anymore


# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
# https://github.com/jazzband/djangorestframework-simplejwt/blob/master/rest_framework_simplejwt/serializers.py

# https://www.django-rest-framework.org/api-guide/permissions/


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['username'] = user.username
    #     token['message'] = 'why is the sky blue?  why is water wet?'

    #     return token

    # commented out function above puts the username and a message encrypted into the access token
    # below function serializes data and makes it accessible in the API, making it easier to grab from the frontend

    def validate(self, attrs):
        data = super().validate(attrs)
        # data['username'] = self.user.username
        # data['email'] = self.user.email

        # changing to for loop to output the data from the serializer instead of adding manually
        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            data[key] = value

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# https://www.django-rest-framework.org/api-guide/views/#function-based-views

@api_view(['GET'])
def getRoutes(request):

    routes = [
        '/api/products',
        '/api/products/create',

        '/api/products/upload',

        '/api/products/<id>/reviews',

        '/api/products/top',
        '/api/products/<id>',

        '/api/products/delete/<id>',
        '/api/products/<update>/<id>', 
    ]

    # return JsonResponse(routes, safe=False)
    # above was before django rest framework was being used

    return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProducts(request):
    # return JsonResponse(products, safe=False)
    # above was before django rest framework was being used

    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    # product = None
    # # loop through products array to find product with primary key (_id) that matches    
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break
    # above was for before the database was being queried

    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False) 
    return Response(serializer.data)

