'use strict'

class DashboardController {
  index ({ view }) {
    return view.render('administrator/pages/index', { title: 'test' })
  }
}

module.exports = DashboardController
