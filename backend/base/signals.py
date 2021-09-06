from django.db.models.signals import pre_save
from django.contrib.auth.models import User

# https://docs.djangoproject.com/en/3.2/topics/signals/


def updateUser(sender, instance, **kwargs):
    # print('Signal triggered')
    if user.email != '':
        user.username = user.email

pre_save.connect(updateUser,sender=User)