/*!
 * {{basename}} <https://github.com/nknapp/{{basename}}}>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
var verb = require('verb')

verb.helper('thisModule', require('./'))

verb.task('default', function () {
    verb.src(['.verb.md'])
        .pipe(verb.dest('./'))
})
