from django.db import models


class Post(models.Model):
    """Inherits :class:`django.db.models.Model`."""
    title = models.CharField(max_length=64)
    author = models.ForeignKey('auth.User', related_name='blog', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = (
            'created_at',
        )

    def save(self, *args, **kwargs):
        """Placeholder method for adding HTML markup tags to content."""
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title # TODO: Consider returning more attributes.