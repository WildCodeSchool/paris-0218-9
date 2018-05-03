import {newPosts} from '../modules/posts.js'
import {createVoteYes} from '../modules/createVote.js'
import {createVoteSalty} from '../modules/createVoteSalty.js'
import {createVoteBad} from '../modules/createVoteBad.js'
import { askComment } from '../modules/askComment.js'
import { addCom } from '../modules/addCom.js'
import {authentification} from '../modules/authentification.js'
import {modalLogin} from '../modules/modalLogin.js'
import {menuburgerCom} from '../modules/menuburger.js'

/* global URLSearchParams */

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

// recupere le post dans la db
window.fetch(`http://localhost:3000/postComment/${id}`)
  .then(res => res.json())
  .then(post => {
    const postElement = document.getElementById('post_detail')
    postElement.innerHTML = post.map(newPosts).join('')
    console.log('post res :', post)
    createVoteYes()
    createVoteSalty()
    createVoteBad()
    authentification()
    modalLogin()
    menuburgerCom()
  })

// recupere les com lié au post dans la db
askComment(id)

// click sur valider = envoi le com dans la db et recupere tous les com de la db(lié au post)
addCom(id)

// masque le formulaire si non connecté
const formElt = document.getElementById('add_com')
window.fetch('http://localhost:3000/', {credentials: 'include'})
  .then(res => res.json())
  .then(res => {
    if (res.id === undefined) {
      formElt.style.display = 'none'
    } else {
      formElt.style.display = 'flex'
    }
  })
