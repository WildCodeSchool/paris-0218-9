export const newPosts = (post) => {
  return `
    <div class='divposts'>
      <h4>VDD</h4>
      <p>Home/user-VDD:</p>
      <p>${post.content}</p>
    </div>
    <div class='boutons'>
      <button>YES</button>
      <button>SALTY</button>
    </div>
    `
}
