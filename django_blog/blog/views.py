from django.shortcuts import render
from django.http import HttpResponse

post = [
    {
        'author': 'Khris Bharmmano',
        'img': 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/323362018_501206162157180_6157985256050645808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE6t5mLNepXlRihPaqihYBIURlrm7JHFYhRGWubskcViHkG6PKRMJFdZxkkT6EMkrlJ1IbAIG3OCPWMFrhHOtOd&_nc_ohc=-38Igeiag-AAX9bVbi0&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdS54rxXjEXnWSzsKRFO_lCwPUL75a1T08i6HAdm4fZh-w&oe=63E21A34',
        'category': 'Category 1',
        'title': 'Blog Post 1',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'data_posted': '8 January 2023',
    },
    {
        'author': 'Khris Bharmmano',
        'img': 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/323362018_501206162157180_6157985256050645808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE6t5mLNepXlRihPaqihYBIURlrm7JHFYhRGWubskcViHkG6PKRMJFdZxkkT6EMkrlJ1IbAIG3OCPWMFrhHOtOd&_nc_ohc=-38Igeiag-AAX9bVbi0&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdS54rxXjEXnWSzsKRFO_lCwPUL75a1T08i6HAdm4fZh-w&oe=63E21A34',
        'category': 'Category 2',
        'title': 'Blog Post 2',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'data_posted': '9 January 2023',
    },
    {
        'author': 'Khris Bharmmano',
        'img': 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/323362018_501206162157180_6157985256050645808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE6t5mLNepXlRihPaqihYBIURlrm7JHFYhRGWubskcViHkG6PKRMJFdZxkkT6EMkrlJ1IbAIG3OCPWMFrhHOtOd&_nc_ohc=-38Igeiag-AAX9bVbi0&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdS54rxXjEXnWSzsKRFO_lCwPUL75a1T08i6HAdm4fZh-w&oe=63E21A34',
        'category': 'Category 1',
        'title': 'Blog Post 3',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'data_posted': '10 January 2023',
    }
]


def Home(request):
    context = {
        'posts': post
    }
    return render(request, 'blog/home.html', context)


def About(request):
    return render(request, 'blog/about.html', {'title': 'About'})
