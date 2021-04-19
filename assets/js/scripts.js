// Variable declarations
const hamburger = document.getElementById("hamburger")
const hamburgerOpen = document.getElementById("hamburger-open")
const hamburgerClosed = document.getElementById("hamburger-closed")
const sidebar = document.getElementById("sidenav")
const mainLogo = document.getElementById("mainLogo")
const blackOverlay = document.getElementById("black-overlay")
const hero = document.getElementById("hero")
const navbar = document.getElementById("nav")
const stars = document.querySelectorAll(".far-hide")
const starEl = document.querySelector(".stars")
const newsletterImg = document.getElementById("newsletter_img")

// Apply blackoverlay when sidebar nav is active
blackOverlay.addEventListener("click", function () {
  sidenav.classList.remove("active-nav")
  mainLogo.classList.remove("opacity-0")
  blackOverlay.classList.remove("active-overlay")
  document.body.classList.remove("disable-scroll")

  hamburgerClosed.classList.remove("hamburger-closed")
  hamburgerOpen.classList.add("hamburger-closed")
})

// Open Hamburger menu
hamburger.addEventListener("click", function () {
  sidenav.classList.toggle("active-nav")
  mainLogo.classList.toggle("opacity-0")
  blackOverlay.classList.toggle("active-overlay")
  document.body.classList.toggle("disable-scroll")
  navbar.classList.remove("active-navbar")

  hamburgerClosed.classList.toggle("hamburger-closed")
  hamburgerOpen.classList.toggle("hamburger-closed")

  if (!sidenav.classList.contains("active-nav") && window.scrollY > 1) {
    setTimeout(function () {
      navbar.classList.add("active-navbar")
    }, 300)
  }
})

// Parallax effect on hero
window.addEventListener("scroll", function () {
  if (!mobileView.matches) {
    let offset = window.pageYOffset
    hero.style.backgroundPositionY = -offset * 0.4 + "px"
  }
})

// Apply active navbar styling
checkNav = () => {
  if (window.scrollY > 1 && !sidenav.classList.contains("active-nav")) {
    navbar.classList.add("active-navbar")
    console.log("RUN")
  } else {
    navbar.classList.remove("active-navbar")
  }
}

// Fade in stars
checkStars = () => {
  // Get location of star element relative to top of DOM
  let rect = starEl.getBoundingClientRect()

  // Fire animation a little early
  let distanceFromTop = -100

  //Delay 0.2s each itteration to fade in stars
  if (rect.top - window.innerHeight < distanceFromTop) {
    stars.forEach((star, i) => {
      setTimeout(() => {
        star.classList.add("fade-in-stars")
      }, i * 200)
    })
  }
}

newsletterImg.addEventListener("click", function () {
  alert("This would link to the newsletter signup page.")
})

// On scroll, check for stars in view
window.addEventListener("scroll", checkStars)

// On scroll, run checkNav function to apply active navbar styling
window.addEventListener("scroll", checkNav)

var mobileView = window.matchMedia("(max-width: 610px)")
