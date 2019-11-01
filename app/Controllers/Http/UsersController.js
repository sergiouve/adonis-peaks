'use strict'

const User = use('App/Models/User')

class UsersController {
  async list ({ request, response }) {
    const users = await User.all()

    response.send(users)
  }
}

module.exports = UsersController
