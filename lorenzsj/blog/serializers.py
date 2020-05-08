from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework import permissions

from blog.models import Post


class UserSerializer(serializers.ModelSerializer):
    blog = serializers.HyperlinkedRelatedField(many=True, view_name='post-detail', read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'blog',
        )


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'author',
            'content',
            'created_at',
            'updated_at',
        )