let couleurLogo = document.querySelector('img');
let couleurFond = document.querySelector('header');
let couleurText = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        couleurLogo.style.filter = "invert(2)";
        couleurFond.classList.add('anim-header');
        couleurText.style.color = "#FFFFFF";
} else {
        couleurLogo.style.filter = "none";
        couleurFond.classList.remove('anim-header');
        couleurText.style.color = "rgba(21, 21, 21, 0.8)";
}
});

