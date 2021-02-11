/* eslint-disable no-undef */
'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const $route = require('./../../constants/Route')
Route.group(() => {
  Route.get('login', 'AuthController.index').as($route.LOGIN).middleware(['redirectIfAuth'])
  Route.post('login', 'AuthController.login').as($route.POST_LOGIN)
  Route.get('/logout', 'AuthController.logout').as($route.LOGOUT)
})

Route.group(() => {
  Route.get('/', 'DashboardController.index').as($route.ADMIN_DASHBOARD)
  Route.get('/user/', 'UserController.index').as($route.ADMIN_USER_LIST)
  Route.get('/user/form', 'UserController.form').as($route.ADMIN_USER_FORM)
  Route.get('/user/:id', 'UserController.getOne')
})
  .prefix('administrator')
  .middleware(['redirectIfNoAuth', 'auth'])
Route.on('/').render('welcome')
