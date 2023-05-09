//DOM pieces
const body = document.querySelector('body')
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const navHome = document.getElementById('menu-home')
const navAbout = document.getElementById('menu-about')
const navPortfolio = document.getElementById('menu-portfolio')
const navContact = document.getElementById('menu-contact')
const about = document.querySelector('#about')
const portfolio = document.querySelector('#portfolio')
const contact = document.querySelector('#contact')
const designFill = document.querySelector('#designfill')
const devFill = document.querySelector('#devfill')
const projectManage = document.querySelector('#projectmanage')
const designbtn = document.querySelector('#designbtn')
const devbtn = document.querySelector('#devbtn')
const projbtn = document.querySelector('#projbtn')
const ctabtn = document.querySelector('#cta-btn')
const monthspan = document.querySelector('#monthspan')
const yearspan = document.querySelector('#yearspan')
const hobbies = document.querySelector('#hobbies')
const gershonpic = document.querySelector('#gershonpic')

//DOM functions
function hideMain() {
    main.classList.add('hidden')
}
function revealMain(){
    main.classList.remove('hidden')
    about.classList.add('hidden')
    portfolio.classList.add('hidden')
    contact.classList.add('hidden')
}
function hideNav(){
    nav.classList.add('hidden')
}
function revealNav(){
    nav.classList.remove('hidden')
}
function hideAbout(){
    about.classList.add('hidden')
}
function revealAbout(){
    about.classList.remove('hidden')
    main.classList.add('hidden')
    portfolio.classList.add('hidden')
    contact.classList.add('hidden')
}
function hidePortfolio(){
    portfolio.classList.add('hidden')
}
function revealPortfolio(){
    portfolio.classList.remove('hidden')
    about.classList.add('hidden')
    main.classList.add('hidden')
    contact.classList.add('hidden')
}
function hideContact(){
    contact.classList.add('hidden')
}
function revealContact(){
    contact.classList.remove('hidden')
    main.classList.add('hidden')
    about.classList.add('hidden')
    portfolio.classList.add('hidden')
}
function hideDesign(){
    designFill.classList.toggle('hidden')
}
function revealDesign(){
    designFill.classList.toggle('hidden')
    devFill.classList.add('hidden')
    projectManage.classList.add('hidden')
    if(gershonpic.style.transform = "rotate(60deg"){console.log("already")}else{gershonpic.style.transform = "rotate(60deg)"}
}
function hideDevelop(){
    devFill.classList.add('hidden')
}
function revealDevelop(){
    designFill.classList.add('hidden')
    devFill.classList.toggle('hidden')
    projectManage.classList.add('hidden')
    gershonpic.style.transform = "rotate(120deg)"   
}
function RevealProjectManage(){
    projectManage.classList.toggle('hidden')
    devFill.classList.add('hidden')
    designFill.classList.add('hidden')
    gershonpic.style.transform = "rotate(180deg)"
}
function GershonPicReset(){
    gershonpic.style.transform = "none"
}
//NAV functionality
navHome.addEventListener('click',revealMain)
navAbout.addEventListener('click',revealAbout)
navPortfolio.addEventListener('click',revealPortfolio)
navContact.addEventListener('click',revealContact)
//BuildSomething functionality
ctabtn.addEventListener('click',revealContact)

//Services functionality
designbtn.addEventListener('click',revealDesign)
devbtn.addEventListener('click',revealDevelop)
projbtn.addEventListener('click',RevealProjectManage)
gershonpic.addEventListener('mouseover',GershonPicReset)
//month/year spans
const date = new Date()
const month = date.getMonth()
const year = date.getFullYear()
const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
for(i=0;i<=11;i++){if(month == i){monthspan.innerText = monthArr[i] + "  "}}
yearspan.innerText = year;

//mediaquery stuff
//alert("Your screen resolution: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio)