'use strict'

const User = use('App/Models/User')

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const usernames = [
  'David Lama',
  'Conrad Anker',
  'Simone Moro',
  'That dude from Espot',
]

class UserSeeder {
  async run () {
    for (const name of usernames) {
      const user = new User()

      user.name = name;
      user.password = 's3cr3t';

      await user.save()
    }
  }
}

module.exports = UserSeeder
