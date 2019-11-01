'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeaksPeaksSchema extends Schema {
  up () {
    this.create('peaks_peaks', (table) => {
      table.increments()
      table.string('name')
      table.integer('altitude')
      table.timestamps()
    })
  }

  down () {
    this.drop('peaks_peaks')
  }
}

module.exports = PeaksPeaksSchema
