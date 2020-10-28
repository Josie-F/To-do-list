const { static } = require("express")
const crypto = require('crypto')

class Task {
    static all = []
    constructor(desc) {
        this.id = crypto.randomBytes(8).toString('hex')
        this.desc = desc
        this.status = 0
        this.highlight = false
        this.constructor.all.push(this)
    }
}
module.exports = Task