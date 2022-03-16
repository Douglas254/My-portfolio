
//dear future me if you are reading this code i just want to say i am sorry

//dear future me, if you are reading this code, i just what to say 
// I AM SORRY

//moon size
if(window.innerWidth < 768){
    let moon = document.querySelector(".fa-moon")
    moon.classList.remove("fa-2x")
    //navigation bar
    let bars = document.querySelector(".fa-bars")
    let navUl = document.querySelector("nav > ul")
    bars.addEventListener("click",()=>{
        navUl.style.left = "0%"
    })
    let X = document.querySelector(".fa-times-circle")
    X.addEventListener("click",()=>{
        navUl.style.left = "-120%"
    })
    let ul = document.querySelector("nav ul")
    ul.addEventListener("click", (e)=>{
        if(e.target.classList == "click"){
            navUl.style.left = "-120%"
        }
    })
}
//dark mode
const moon = document.querySelector("#moon")
moon.addEventListener("click", ()=>{
    let body = document.querySelector("body")
    body.classList.toggle("darkMode")
    moon.classList.toggle("fas");
    moon.classList.toggle("fa-moon");
    moon.classList.toggle("far");
    moon.classList.toggle("fa-sun");
})
//scrolling animations
window.addEventListener("scroll",()=>{
    let content = document.querySelector("#aboutMe")
    let styles = document.querySelector(".aboutMeContent p")
    let contentposition = content.getBoundingClientRect().top;
    if(contentposition < window.innerHeight){
        if(window.innerWidth < 480){
            styles.style.top = "0px"
        }else{
            styles.style.top = "-20px"
        }
    }else{
        styles.style.top = "150px"
    }
    let img = document.querySelector(".aboutMeContent img")
    let imgPosition = img.getBoundingClientRect().top;
    if(imgPosition < window.innerHeight){
        img.style.left = "0px"
    }else{
        img.style.left = "500px"
    }
})
//animation station
if(window.innerWidth > 768){
    let p = document.querySelector(".aboutMeContent p")
    p.style.animationDelay = "500ms"
}
    
//projects

const projectDivs = [...document.querySelectorAll(".realProjects")]


for (let i = 0; i < projectDivs.length; i++) {
    projectDivs[i].addEventListener("click",()=>{
       let currentClick =  projectDivs.indexOf(projectDivs[i]);
       console.log(currentClick)
       for (let j = currentClick + 1; j < projectDivs.length; j++) {
           console.log(projectDivs[j])
           // i swear to god i dont know how this shit worked 🤣
           projectDivs[j].classList.toogle("leftMove")
       }
    })
}

