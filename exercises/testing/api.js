const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()
const {handler} = require('./error')

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
  const id = req.params.id
  // should ge user by given id in route param
  let [err, result] = await handler(users.findUser(Number(id)))
  if(err)
     return res.status(404).send(err); 
  res.status(200).send(result)
})

app.delete('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id) 
  let [err, result] = await handler( users.deleteUser(id));
  if(err)
    return res.status(404).send(err); 
  res.status(201).send({id})
})

module.exports = app
