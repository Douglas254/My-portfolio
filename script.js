
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
    

// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".brain")
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     const mask= document.querySelector(".mask101");
//     const immag = document.querySelector("#mask101 img");
//     let javascript = document.querySelector(".javascript1")
//     let python = document.querySelector(".python")
//     let brain = document.querySelector(".brain")
//     const width = window.innerWidth;
//     if (width<530){
//         var delay = 0;
        
//     }else{
//         var delay = 4000;
//     };
//     newFunction(contentposition, screenposition, mask, delay);
//     function newFunction(contentposition, screenposition, mask, delay) {
//         if (contentposition < screenposition) {
//             setTimeout(() => {
//                 mask.classList.add("mask2");
//                 immag.style.opacity = "0";
//                 setTimeout(()=>{
//                     javascript.style.width = "60%"
//                 },800)
//                 setTimeout(()=>{
//                     python.style.width = "20%"
//                 },1000)
//                 setTimeout(()=>{
//                     brain.style.width = "30%"
//                 },1200)
//             }, delay);
//         }
//         else {
//             mask.classList.remove("mask2");
//             immag.style.opacity = "1"
//             javascript.style.width = "0%"
//             python.style.width = "0%"
//             brain.style.width = "0%"
//         }
//     }
// })
// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".patience")
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     const mask= document.querySelector(".mask102");
//     const immag = document.querySelector(".mask102 img")
//     let linux = document.querySelector(".linux");
//     let git = document.querySelector(".git")
//     let photoshop = document.querySelector(".photoshop")
//     let patience = document.querySelector(".patience");
//     const width = window.innerWidth;
//     if (width<530){
//         var delay = 0;
//     }else{
//         var delay = 6000;
//     };
//     newFunction(contentposition, screenposition, mask, delay);
//     function newFunction(contentposition, screenposition, mask, delay) {
//         if (contentposition < screenposition) {
//             setTimeout(() => {
//                 mask.classList.add("mask2");
//                 immag.style.opacity = "0"
//                 setTimeout(()=>{
//                     linux.style.width = "30%"
//                 },1000)
//                 setTimeout(()=>{
//                     git.style.width = "100%"
//                 },1200)
//                 setTimeout(()=>{
//                     photoshop.style.width = "50%"
//                 },1400)
//                 setTimeout(()=>{
//                     patience.style.width = "100%"
//                 },1600)
//             }, delay);
//         }
//         else {
//             mask.classList.remove("mask2");
//             immag.style.opacity = "1"
//             linux.style.width = "0%"
//             git.style.width = "0%"
//             photoshop.style.width = "0%"
//             patience.style.width = "0%"
//         }
//     }
// });
// //projects
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

