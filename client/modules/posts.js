export const newPosts = (post) => {
  let idYes = `yesVote_${post.id}`
  let idYesCompteur = `yesCompt_${post.id}`
  return `
    <div class='divposts'>
      <h4>VDD</h4>
      <p>Home/user-VDD<span class="blink">&#9608;</span></p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button class="yesVote" id=${idYes}>YES</button>
      <button>SALTY</button>
      <button>BAD</button>
    </div>
    <div class='votes'>
      <p class="compteur" id=${idYesCompteur}>${post.yesVotes.length}</p>
      <p class="compteur">${post.saltyVotes.length}</p>
      <p class="compteur">${post.badVotes.length}</p></div>
    </div>
    `
}
