const bcrypt = require('bcrypt')
const {MD5} = require('crypto-js')


const user ={
    id:1,
    token: MD5('asdf').toString()
}

console.log(user)