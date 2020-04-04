from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework import permissions

from blog.models import Post


class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = (
            'url',
            'id',
            'title',
            'author',
            'content',
        )


class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(many=True, view_name='post-detail', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'posts']