/* ===== OUTRO ===== */
const page = document.querySelector('[data-id]')

function redirect(project){
    console.log('redirect')
    const tl2 = new gsap.timeline({ defaults: { ease: Power1.easeInOut } });
    tl2.set(".custom-cursor", { opacity: 0 });
    tl2.set("#back-to-top-btn", { display: "none" });
    tl2.set("html", { overflowY: "hidden" });
    tl2.set(".intro", { opacity: 0},);
    tl2.set(".text" , { opacity: 0},);
    tl2.set(".intro", { y: "0%"},);
    tl2.to(".intro", { opacity: 1, duration: .5 },);
    setTimeout(function(){
        window.location.href = '/assets/pages/'+ project +'.html';
    }, 1200);
}

function redirectback(path,anchor){
    console.log('redirect')
    const tl2 = new gsap.timeline({ defaults: { ease: Power1.easeInOut } });
    tl2.set(".custom-cursor", { opacity: 0 });
    tl2.set("#back-to-top-btn", { display: "none" });
    tl2.set("html", { overflowY: "hidden" });
    tl2.set(".intro", { opacity: 0},);
    tl2.set(".text" , { opacity: 0},);
    tl2.set(".intro", { y: "0%"},);
    tl2.to(".intro", { opacity: 1, duration: .5 },);
    setTimeout(function(){
        window.location.href = '/'+ path +'.html' + anchor;
    }, 1200);
}



/* ===== MENU SHOW ===== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')







/* ==================== DARK LIGHT THEME ==================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'
const themeImage = document.getElementById('logo')
const imgTheme = 'dark-img'
const themeImage1 = document.getElementById('navlogo')

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedImg = localStorage.getItem('selected-img')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentImg = () => themeImage.classList.contains(imgTheme) ? 'dark-img' : 'light-img'

const getCurrentImg1 = () => themeImage1.classList.contains(imgTheme) ? 'dark-img' : 'light-img'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

    themeImage.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeImage1.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    themeImage.classList.toggle(imgTheme)
    themeImage1.classList.toggle(imgTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-img' , getCurrentImg())
})


// /* ==================== TIPYNG TITLE ANIMATION ==================== */
// jQuery(document).ready(function ($) {
// window.ityped.init(document.querySelector('.ityped'),{
//   strings: ["Let's Get Into The Project","Let's Get Into The Project","Let's Get Into The Project"],
//   loop: true,
//   typeSpeed:  150,
//   backDelay: 3000,
// })