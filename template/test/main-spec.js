/*!
 * {{basename}} <https://github.com/{{organization}}/{{basename}}>
 *
 * Copyright (c) {{date date 'YYYY'}} Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */

const {{camelcase basename}} = require('../')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('{{basename}}:', function () {
  it("should be executed", function () {
    expect({{camelcase basename}}()).to.equal('{{camelcase basename}}')
  })
})
