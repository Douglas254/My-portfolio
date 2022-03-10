
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
        navUl.style.left = "-100%"
    })
    let ul = document.querySelector("nav ul")
    ul.addEventListener("click", (e)=>{
        if(e.target.classList == "click"){
            navUl.style.left = "-100%"
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

// //anime
// let land = document.querySelector(".landing");
// // window.addEventListener("load",()=>{
//     var delay1 = 1200; //1 second
//     var delay2 = 5100;
//     var delay3 = 8100;
//      setTimeout(function() {
//          p1.textContent = "I am Tinega Collins"        
// }, delay1);
// p1.classList.add("p1onload")
// const p2 = document.querySelector("#p2")
// setTimeout(function() {
//     p2.textContent = "And this"
// }, delay2);
// p2.classList.add("p2onload")
// const p3 =document.querySelector("#p3")
// setTimeout(function() {
//     p3.textContent = "is My World"
// },delay3);
// p3.classList.add("p3onload")
// //scroll
// const scrollBar = document.querySelector(".scrollDown");
// const tap = document.querySelector(".taptap");
// setTimeout(()=>{
//     scrollBar.style.opacity = "1";
// },10300)
// // })
// //scroll

// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".content2");
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     let img = document.querySelector(".content3");
//     let article = document.querySelector(".content2")
//     const scrollBar = document.querySelector(".scroll")
//     if(contentposition < screenposition){
//        article.style.right = "0px"
//        img.style.left = "0px";
//        let scrollBar1 = document.querySelector(".fa-arrow-down");
//        scrollBar1.style.opacity = "0"
//     }else{
//         article.style.right = "1200px"
//         img.style.left = "1000px"
//     }

// })
// const moonIcon = document.querySelector("#moon2")
// moonIcon.addEventListener("click",()=>{
//     const body = document.querySelector("body")
//     body.classList.toggle("dark10000")
// })
// const downBar = document.querySelector("#downbar ul");
// console.log(downBar);
// window.onscroll = function(e) {
//     if(this.oldScroll > this.scrollY){
//        downBar.style.bottom = "0px"
//     }
//     else{
//         downBar.style.bottom = "-100px"
//     }
//     this.oldScroll = this.scrollY;
//   }
// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".html")
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     let javascript = document.querySelector(".javascript")
//     let node = document.querySelector(".node")
//     let css = document.querySelector(".css")
//     let html = document.querySelector(".html")
//     let wordpress = document.querySelector(".wordpress")
//     const mask = document.querySelector(".masksup")
//     const width = window.innerWidth
//     if (width<530){
//         var delay = 0;
//     }else{
//         var delay = 2000;
//     };
    
//     newFunction(contentposition, screenposition, mask, delay);
//     function newFunction(contentposition, screenposition, mask, delay,imgJpeg) {
//         var imgJpeg = document.querySelector(".jpegg")
//         if (contentposition < screenposition) {
//             setTimeout(() => {
//                 mask.classList.add("mask2");
//                 imgJpeg.style.opacity = "0"
//                 setTimeout(()=>{
//                     javascript.style.width = "60%"
//                 },1000)
//                 setTimeout(()=>{
//                     node.style.width = "20%"
//                 },1200)
//                 setTimeout(()=>{
//                     css.style.width = "70%"
//                 },1400)
//                 setTimeout(()=>{
//                     html.style.width = "95%"
//                 },1600)
//                 setTimeout(()=>{
//                     wordpress.style.width = "20%"
//                 },1800)
//             }, delay);
//         }
//         else {
//             mask.classList.remove("mask2");
//             imgJpeg.style.opacity= "1";
//             javascript.style.width = "0%"
//             node.style.width = "0%"
//             css.style.width = "0%"
//             html.style.width = "0%"
//             wordpress.style.width = "0%"
//         }
//     }
// });
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

