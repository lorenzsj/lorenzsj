from django.urls import path
from django.conf.urls import include

from rest_framework.urlpatterns import format_suffix_patterns

from blog import views

urlpatterns = format_suffix_patterns([
    path('', views.api_root),
    path('api-auth/', include('rest_framework.urls')),
    path('api/blog/',
        views.PostList.as_view(),
        name='post-list'),
    path('api/blog/<int:pk>/',
        views.PostDetail.as_view(),
        name='post-detail'),
    path('api/users/', # TODO: Put user definitions in a global app
        views.UserList.as_view(),
        name='user-list'),
    path('api/users/<int:pk>/', # TODO: Put user definitions in a global app
        views.UserDetail.as_view(),
        name='user-detail')
])