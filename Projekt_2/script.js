const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
  //   console.log("Bylo kliknuto")
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark")
    hamburgerIcon.classList.remove("fa-bars")
    // menuList.classList.add("nav") - POKUS
    menuList.style.display = "block"
  } else {
    hamburgerIcon.classList.add("fa-bars")
    hamburgerIcon.classList.remove("fa-xmark")
    // menuList.classList.remove("nav") - POKUS
    menuList.style.display = "none"
  }
})

/****** POKUS

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")
const barsIcon = document.querySelector(".fa-solid fa-bars")
const xmarkIcon = document.querySelector(".fa-solid fa-xmark")

menuIcon.addEventListener("click", () => {
  console.log("Bylo kliknuto")
  if (hamburgerIcon.classList[1] === barsIcon) {
    barsIcon.style.display = "none"
    xmarkIcon.style.display = "block"
  } else {
    barsIcon.style.display = "block"
    xmarkIcon.style.display = "none"
  }
})

*******/

/******* POKUS

// const menuIcon = document.querySelector(".menu-icon")
// const menuList = document.querySelector("nav")
// const hamburgerIcon = document.querySelector(".fa-solid")
// const barsIcon = document.querySelector(".fa-solid fa-bars")
// const xmarkIcon = document.querySelector(".fa-solid fa-xmark")
// const removeClass = hamburgerIcon.classList.remove
// const addClass = hamburgerIcon.classList.add

// menuIcon.addEventListener("click", () => {
//   console.log("Bylo kliknuto")
//   if (barsIcon === barsIcon) {
//     removeClass(barsIcon)
//     addClass(xmarkIcon)
//   } else {
//     addClass(barsIcon)
//     removeClass(xmarkIcon)
//   }
// })

*********/
