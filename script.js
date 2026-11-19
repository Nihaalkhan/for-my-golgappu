
const pages = document.querySelectorAll(".page");
const navigation = document.getElementById("navigation");
const backBtn = document.getElementById("backBtn");
const pageDots = document.getElementById("pageDots");

let currentPage = 0;


// SECRET STAR MESSAGES

const starMessages = [
  "You are allowed to have bad days. They don't make you any less wonderful. ♡",

  "Somewhere, someone is smiling because you exist. ✨",

  "You deserve the same kindness you give to other people. 🧸",

  "May the next chapter of your life be your prettiest one yet. 🌙",

  "A little reminder: you're doing better than you think. 💗",

  "If life gets heavy, take a breath. You don't have to solve everything today. ☁️",

  "Sending one virtual teddy bear to your location. Delivery may take forever. 🧸",

  "My Strawberry, don't forget to smile today. 🍓",

  "Sexy Naveen has been officially ordered to have a wonderful day. 😂💋",

  "Golgappu appreciation day is every day. No exceptions. 💕"
];


// CREATE FLOATING STARS

const sky = document.getElementById("sky");

for (let i = 0; i < 65; i++) {

  const star = document.createElement("span");

  star.className = "star";

  star.innerHTML = Math.random() > 0.5 ? "✦" : "✧";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.fontSize =
    (Math.random() * 10 + 6) + "px";

  star.style.animationDelay =
    Math.random() * 4 + "s";

  star.style.animationDuration =
    (Math.random() * 3 + 2) + "s";

  sky.appendChild(star);
}


// CREATE PAGE DOTS

for (let i = 0; i < pages.length; i++) {

  const dot = document.createElement("span");

  dot.className = "dot";

  if (i === 0) {
    dot.classList.add("active");
  }

  pageDots.appendChild(dot);
}


// UPDATE BOOK

function updateBook() {

  pages.forEach((page, index) => {

    page.classList.toggle(
      "active",
      index === currentPage
    );

  });


  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {

    dot.classList.toggle(
      "active",
      index === currentPage
    );

  });


  backBtn.style.visibility =
    currentPage === 0 ? "hidden" : "visible";


  navigation.classList.toggle(
    "hidden",
    currentPage === 0
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// OPEN BOOK

function openBook() {

  currentPage = 1;

  updateBook();

}


// NEXT PAGE

function nextPage() {

  if (currentPage < pages.length - 1) {

    currentPage++;

    updateBook();

  }

}


// PREVIOUS PAGE

function previousPage() {

  if (currentPage > 0) {

    currentPage--;

    updateBook();

  }

}


// RESTART BOOK

function restartBook() {

  currentPage = 0;

  updateBook();

}


// STAR SURPRISE

function starMessage() {

  const randomIndex = Math.floor(
    Math.random() * starMessages.length
  );

  document.getElementById("popupText").innerText =
    starMessages[randomIndex];

  document.getElementById("surprisePopup")
    .classList.add("show");

}


// CLOSE POPUP

function closePopup() {

  document.getElementById("surprisePopup")
    .classList.remove("show");

}


// CLICK OUTSIDE POPUP TO CLOSE

document.getElementById("surprisePopup")
  .addEventListener("click", function(event) {

    if (event.target === this) {

      closePopup();

    }

  });


// KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

  if (event.key === "ArrowRight") {

    if (currentPage === 0) {

      openBook();

    } else {

      nextPage();

    }

  }


  if (event.key === "ArrowLeft") {

    previousPage();

  }


  if (event.key === "Escape") {

    closePopup();

  }

});


// INITIALIZE

updateBook();
