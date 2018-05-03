import {createSearch} from '../modules/createSearch.js'
import {modalLogin} from '../modules/modalLogin.js'
import {authentification} from '../modules/authentification.js'
export const menuburger = () => {
  let i = 0
  document.getElementById('burger').addEventListener('click', () => {
    if (i === 0) {
      document.getElementById('burger_menu').innerHTML = `
        <li><a href="/index.html">Accueil</a></li>
         <li><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li><input type="text" id="search_btn_tel"></li>
        <li><a href="#" id="signupsm">Log in</a></li>
        <li><div id="auth" style="color :white"></div>
          <form id="sign_out_form2" style="display: none">
              <input type="submit" value="logout">
            </form>
        </li>
        `
      i = 1
      createSearch('search_btn_tel')
      modalLogin()
      authentification()
    } else {
      document.getElementById('burger_menu').innerHTML = `
        <li class="nodisplay"><a href="/index.html">Accueil</a></li>
        <li class="nodisplay"><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li class="nodisplay"><input type="text" id="search_btn_tel2"></li>
        <li class="nodisplay"><a href="#" id="signupsm">Log in</a></li>
        <li class="nodisplay"><div id="auth" style="color :white"></div>
        <form id="sign_out_form2" style="display: none">
            <input type="submit" value="logout">
          </form>
    </li>
        `
      i = 0
      modalLogin()
      authentification()
    }
  })
}

export const menuburgerCom = () => {
  let i = 0
  document.getElementById('burger').addEventListener('click', () => {
    if (i === 0) {
      document.getElementById('burger_menu').innerHTML = `
        <li><a href="/index.html">Accueil</a></li>
         <li><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li><a href="#" id="signupsm">Log in</a></li>
        <li><div id="auth" style="color :white"></div>
          <form id="sign_out_form2" style="display: none">
              <input type="submit" value="logout">
            </form>
        </li>
        `
      i = 1
      modalLogin()
      authentification()
    } else {
      document.getElementById('burger_menu').innerHTML = `
        <li class="nodisplay"><a href="/index.html">Accueil</a></li>
        <li class="nodisplay"><a href="formulaire_post.html">Soumettre mes VDD</a></li>
        <li class="nodisplay"><a href="#" id="signupsm">Log in</a></li>
        <li class="nodisplay"><div id="auth" style="color :white"></div>
        <form id="sign_out_form2" style="display: none">
            <input type="submit" value="logout">
          </form>
    </li>
        `
      i = 0
      modalLogin()
      authentification()
    }
  })
}
