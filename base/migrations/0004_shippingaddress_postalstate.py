# Generated by Django 3.2.6 on 2021-09-17 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='postalState',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]