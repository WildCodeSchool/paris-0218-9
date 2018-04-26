const express = require('express')
// const fs = require('fs')
// const util = require('util')
// const path = require('path')
// const readFile = util.promisify(fs.readFile)
// const readdir = util.promisify(fs.readdir)
const db = require('./db.js')
const user1 = require('../mocks/user/1.json')
const user2 = require('../mocks/user/2.json')
const user3 = require('../mocks/user/3.json')
const user4 = require('../mocks/user/4.json')

const comment1 = require('../mocks/comment/1.json')
const comment2 = require('../mocks/comment/2.json')

// ajout de routes notamment pour le post
const routePost = require('./routes/postRoutes')

const users = [ user1, user2, user3, user4 ]

const comments = [ comment1, comment2 ]

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// route permettant de poster les nouveaux votes pour chaque post
app.use('/post', routePost)

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => res.json(posts))
})

// route permettant d'afficher le formulaire des commentaires

app.get('/comments/:id', (req, res) => {

  const id = Number(req.params.id)
  const comment = comments.find(comment => comment.id === id)

  console.log('fetching comments', id, comment)
  res.json(comment)

})


app.listen(3000, () => console.log('serveur écoute sur port 3000'))
