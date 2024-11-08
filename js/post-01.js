import { posts } from "./posts.js"
import { formatPostDate } from "./formatPostDate.js"
import { toggleMenu } from "./toggleMenu.js"



function createHeroHTML() {
  const { image, date, title, content } = posts[0]
  return `<time datetime="${formatPostDate(date)}" class="post-date">${date}</time>
          <h2 class="post-title">${title}</h2>
          <p class="post-content">${content}</p>
          <img src="${image}" alt="${title}" class="post-pic">`
}

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

function renderPosts() {
  const heroContainer = document.getElementById("hero-container")
  const postContainer = document.getElementById("post-container")
  heroContainer.innerHTML = createHeroHTML()
  postContainer.innerHTML = createPostHTML()
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  menuToggle.addEventListener("click", toggleMenu)
  renderPosts()
})