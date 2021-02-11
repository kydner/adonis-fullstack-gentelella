'use strict'

const $route = require('./../../../constants/Route')
class UserController {
  index ({ view, auth, params }) {
    return view.render('login/index', { title: 'test' })
  }

  async login ({ auth, request, response }) {
    const { username, password } = request.all()
    await auth.attempt(username, password)
    return response.route($route.ADMIN_DASHBOARD)
  }

  async logout ({ auth, response }) {
    await auth.logout()
    return response.route('login')
  }

  getAll ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }
}

module.exports = UserController
