from setuptools import setup

with open('README.md', 'r') as f:
    long_description = f.read()

setup(
    name='lorenzsj',
    version='1.0.0',
    author='Stephen Lorenz',
    author_email='lorenzsj@clarkson.edu',
    description='A Django project.',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/lorenzsj/lorenzsj.io',
    install_requires=[
        'django',
        'djangorestframework',
    ],
)
