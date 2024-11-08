import { posts } from "../js/posts.js"
import { formatPostDate } from "./formatPostDate.js"
import { toggleMenu } from "./toggleMenu.js"


function createPostHTML() {
  const postsWithoutFirst = posts.slice(1)
  return postsWithoutFirst.map(({ image, date, title, content, url }) => {
    return `<article class="post">
                <img src="${image}" alt="${title}" class="post-pic">
                <time datetime="${formatPostDate(date)}" class="post-date">${date}</time>
                <h2 class="post-title">${title}</h2>
                <p class="post-content">${content}</p>
                <a href="${url}" class="post-cta"></a>
            </article>`
  }).join("")
}

function renderPostSection() {
  const postContainer = document.getElementById("post-container")
  postContainer.innerHTML = createPostHTML()
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  menuToggle.addEventListener("click", toggleMenu)
  renderPostSection()
})