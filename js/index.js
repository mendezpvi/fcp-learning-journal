import { posts } from "./posts.js"
import { formatPostDate } from "./formatPostDate.js"
import { toggleMenu } from "./toggleMenu.js";


function createPostHTML(post) {
  const { date, title, content, url } = post
  return `<time datetime="${formatPostDate(date)}" class="post-date">${date}</time>
          <h2 class="post-title">${title}</h2>
          <p class="post-content">${content}</p>
          <a href="${url}" class="post-cta"></a>`
}

function setHeroBackgroundImage(imageURL) {
  const heroSection = document.querySelector(".hero-section")
  heroSection.style.background = `url("${imageURL}")`
  heroSection.style.backgroundSize = `cover`
  heroSection.style.backgroundPosition = `top 20% center`
  heroSection.style.backgroundRepeat = `no-repeat`
}

function renderHeroSection() {
  const heroPost = document.getElementById("hero-post")
  heroPost.innerHTML = createPostHTML(posts[0])
  setHeroBackgroundImage(posts[0].image)
}

function createPostWithImageHTML(post) {
  const { image, title } = post
  return `<article class="post">
            <img src="${image}" alt="${title}" class="post-pic">
            ${createPostHTML(post)}
          </article>`
}

function renderPostsSection() {
  const postContainer = document.getElementById("post-container")
  const postsWithoutFirst = posts.slice(1)

  const postHTML = postsWithoutFirst.map((post) => createPostWithImageHTML(post)).join("")
  postContainer.innerHTML = postHTML
}


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  menuToggle.addEventListener("click", toggleMenu)
  renderHeroSection()
  renderPostsSection()
})
