from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products


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
def getProducts(request):
    # return JsonResponse(products, safe=False)
    # above was before django rest framework was being used

    return Response(products)


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    # loop through products array to find product with primary key (_id) that matches    
    for i in products:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)

