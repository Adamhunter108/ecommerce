from rest_framework import  serializers
from django.contrib.auth.models import  User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product


# https://www.django-rest-framework.org/api-guide/serializers/
# Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types.

# docs for user model
# https://docs.djangoproject.com/en/3.2/ref/contrib/auth/

# note: a refresh token is needed when there is an update to the information

class  UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        # fields = '__all__'
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    # you can create serializer method fields that return back custom attributes

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        # passing into built in django field first_name
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

# extending off UserSerializer
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

# generating (serializing) a user, take that user object and return back another token with the initial response

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

