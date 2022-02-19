## install dependencies

Run below commands

```
composer install
npm install
```

## project setup

-   Rename .env.example -> .env
-   Create database with name 'nextbasket'
-   Run below commands

```
php artisan key:generate
php artisan migrate
php artisan db:seed
```

## To Run

```
php artisan serve
npm run watch
```

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Operation guide

-   admin account

```
    email: admin@test.com
    password: admin
```

-   manager account

```
    email: manager@test.com
    password: manager
```

### Note

Only admin and manager can mark each task as done. user can't do that(for authorization).

## Project structure

### Tech Stack
Laravel + Mysql + Vue.js(Bootstrap-vue)

### Backend

```
  - app
    - Http
      - Controllers ( AuthController, TaskController)
      - Middleware ( some middlewares for authentication and other things)
    - Models (User, Task)
    - Providers ( authorization logic in AuthServiceProvider.php)
  - database ( for migration and seed)
  - routes (define some api routes in api.php)

```

### Frontend (/resources)

```
  - css
  - fonts
  - js
    - components (reusable vue.js components)
    - layouts (main page layout)
    - router ( define vue routers)
    - service (setup axios and csrf.service and message.service)
    - store (define vue stores)
    - views
      - pages
        - auth(signin and signup page components)
        - About.vue ( About page components)
        - Home.vue ( Home page components)
    - app.js (setup our vue app)

  - lang
  - sass
  - views(app.blade.php)
```
