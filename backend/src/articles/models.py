from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    date = models.DateTimeField()
    image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.title

    
    def pub_date_pretty(self):
        return self.date.strftime('%b %e %Y')

