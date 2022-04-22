//dear future me if you are reading this code i just want to say i am sorry

//dear future me, if you are reading this code, i just what to say
// I AM SORRY

//moon size
if (window.innerWidth < 768) {
  let moon = document.querySelector(".fa-moon");
  moon.classList.remove("fa-2x");
  //navigation bar
  let bars = document.querySelector(".fa-bars");
  let navUl = document.querySelector("nav > ul");
  bars.addEventListener("click", () => {
    navUl.style.left = "0%";
  });
  let X = document.querySelector(".fa-times-circle");
  X.addEventListener("click", () => {
    navUl.style.left = "-120%";
  });
  let ul = document.querySelector("nav ul");
  ul.addEventListener("click", (e) => {
    if (e.target.classList == "click") {
      navUl.style.left = "-120%";
    }
  });
}
//dark mode
const moon = document.querySelector("#moon");
moon.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.toggle("darkMode");
  moon.classList.toggle("fas");
  moon.classList.toggle("fa-moon");
  moon.classList.toggle("far");
  moon.classList.toggle("fa-sun");
  let allChildElements = [...document.querySelectorAll("nav ul a")];
  for (let i = 0; i < allChildElements.length; i++) {
    const element = allChildElements[i];
    element.classList.toggle(".darkMode");
  }
});
//scrolling animations
window.addEventListener("scroll", () => {
  let content = document.querySelector("#aboutMe");
  let styles = document.querySelector(".aboutMeContent p");
  let contentposition = content.getBoundingClientRect().top;
  if (contentposition < window.innerHeight) {
    if (window.innerWidth < 480) {
      styles.style.top = "0px";
    } else {
      styles.style.top = "-20px";
    }
  } else {
    styles.style.top = "150px";
  }
  let img = document.querySelector(".aboutMeContent img");
  let imgPosition = img.getBoundingClientRect().top;
  if (imgPosition < window.innerHeight) {
    img.style.left = "0px";
  } else {
    img.style.left = "500px";
  }
});
//animation station
if (window.innerWidth > 768) {
  let p = document.querySelector(".aboutMeContent p");
  p.style.animationDelay = "500ms";
}

//projects

const projectDivs = [...document.querySelectorAll(".realProjects")];

for (let i = 0; i < projectDivs.length; i++) {
  projectDivs[i].addEventListener("mouseover", () => {
    let currentClick = projectDivs.indexOf(projectDivs[i]);
    for (let j = currentClick + 1; j < projectDivs.length; j++) {
      // i swear to god i dont know how this shit worked 🤣
      if (window.innerWidth > 480) {
        projectDivs[j].classList.toggle("leftMove");
      }
    }
  });
}
for (let i = 0; i < projectDivs.length; i++) {
  projectDivs[i].addEventListener("mouseout", () => {
    let currentClick = projectDivs.indexOf(projectDivs[i]);
    for (let j = currentClick + 1; j < projectDivs.length; j++) {
      if (window.innerWidth > 480) {
        projectDivs[j].classList.toggle("leftMove");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Tinega Collins", "A Software Developer"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h2").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
