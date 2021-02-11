/* eslint-disable no-undef */
const { hooks } = require('@adonisjs/ignitor')
const $route = require('./../constants/Route')
const $layout = require('./../constants/Layout')
hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')
  View.global('appTitle', () => 'Website ABC')
  View.global('menus', () => $layout.sideMenu)
  View.global('test', () => new Date())
  View.global('$route', $route)
})
