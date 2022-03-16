
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
        console.log(projectDivs.splice(projectDivs.indexOf(projectDivs[i]) + 1,projectDivs.length))
    })
}

// const project1 = document.querySelector(".project1")
// const project2 = document.querySelector(".project2")
// const projectt = document.querySelector("#projects2")
// const project3 = document.querySelector(".project3")
// const project4 = document.querySelector(".project4")
// const project5 = document.querySelector(".project5")
// const project6 = document.querySelector(".project6")
// const project7 = document.querySelector(".project7")
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project1"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project2.classList.add("project2Hover")
//         project3.classList.add("project3Hover")
//         project4.classList.add("project4Hover")
//         project5.classList.add("project5Hover")
//         project6.classList.add("project6Hover")
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project1" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project2.classList.remove("project2Hover")
//         project3.classList.remove("project3Hover")
//         project4.classList.remove("project4Hover")
//         project5.classList.remove("project5Hover")
//         project6.classList.remove("project6Hover")
//         project7.classList.remove("project7Hover")
//     }
// })
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project2"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project3.classList.add("project3Hover")
//         project4.classList.add("project4Hover")
//         project5.classList.add("project5Hover")
//         project6.classList.add("project6Hover")
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project2" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project3.classList.remove("project3Hover")
//         project4.classList.remove("project4Hover")
//         project5.classList.remove("project5Hover")
//         project6.classList.remove("project6Hover")
//         project7.classList.remove("project7Hover")
//     }
// })
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project3"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project4.classList.add("project4Hover")
//         project5.classList.add("project5Hover")
//         project6.classList.add("project6Hover")
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project3" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project4.classList.remove("project4Hover")
//         project5.classList.remove("project5Hover")
//         project6.classList.remove("project6Hover")
//         project7.classList.remove("project7Hover")
//     }
// })
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project4"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project5.classList.add("project5Hover")
//         project6.classList.add("project6Hover")
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project4" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project5.classList.remove("project5Hover")
//         project6.classList.remove("project6Hover")
//         project7.classList.remove("project7Hover")
//     }
// });
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project5"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project6.classList.add("project6Hover")
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project5" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project6.classList.remove("project6Hover")
//         project7.classList.remove("project7Hover")
//     }
// })
// projectt.addEventListener("mouseover",function(e){
//     if(e.target.className == ("realProjects project6"||"complete" || "projectTitle" || "languages" || "sourceCode" || "contributions")){
//         project7.classList.add("project7Hover")
//     }
// })
// projectt.addEventListener("mouseout",function(e){
//     if(e.target.className == "realProjects project6" || "complete" || "projectTitle" || "languages" || "sourceCode" || "contributions"){
//         project7.classList.remove("project7Hover")
//     }
// })

