# from django.contrib import admin
# from django.urls import path,include
# # from user import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', include('user.url')),

#     #login urls
#     path('/signup', include('user.url')),
#     path('/signup/login', include('user.url')),
#     path('/signup/login/main', include('user.url')),
#     path('main/categories', include('user.url')),

#     #main page urls
#     path('main/cart', include('user.url')),
#     path('main/profile', include('user.url')),
#     path('main/course', include('user.url')),

#     #course urls
#     path('course/payment', include('user.url')),
#     path('main/course', include('user.url')),

#     #profile urls
#     path('profile/dashboard', include('user.url')),
#     path('profile/edit', include('user.url')),

#     #seller urls
#     path('index/seller-registration', include('sellerpanel.url')),
#     path('seller-registratoin/seller-dashboard', include('sellerpanel.url')),
#     path('seller-dashboard/upload', include('sellerpanel.url')),
#     path('seller-dashboard/history', include('sellerpanel.url')),

#     #admin urls
#     path('index/admin-login', include('admin.url')),
#     path('admin-login/admin', include('admin.url')),
#     path('admin/', include('admin.url')),
#     path('admin/details', include('admin.url')),
#     path('admin/client', include('admin.url')),
#     path('admin/email', include('admin.url')),
        
# ]
