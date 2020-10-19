const bcrypt = require('bcrypt')
const {MD5} = require('crypto-js')
const jwt = require('jsonwebtoken')

// const mySalt = "qwerty"
// const user ={
//     id:1,
//     token: MD5('asdf').toString()+mySalt
// }

// console.log(user)
const id = '1000'
const secret = "supersecret"
const token = jwt.sign(id,secret)
console.log(token)
const receivedToken = "eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y"
const decodeToken = jwt.verify(receivedToken,secret)
console.log(decodeToken)