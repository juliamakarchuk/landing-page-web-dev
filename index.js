let toggleMenuBtn=document.querySelector('.menu-hidden');
let menu=document.querySelector('.header-menu');
let headerNavigation= document.querySelector('.header-navigation');
let moreWorksBtn=document.querySelector('.works-btn');
let moreWorksBlocks=document.querySelectorAll('.work-block-hidden');

function toggleMenu(e){
    e.preventDefault();
    console.log(e.target);
    headerNavigation.classList.toggle('header-menu-show');
}
toggleMenuBtn.addEventListener('click', toggleMenu);

function toggleBlock(){
    moreWorksBlocks.forEach(el=>{
        el.classList.toggle('work-block-show');
    })
}
moreWorksBtn.addEventListener('click', toggleBlock);



/////////HEADER FIXED/////////////////////////////////////////////
let header=document.querySelector('.wrapper-header-bgc');
console.log(header.offsetHeight);
let banner=document.querySelector('.banner');
console.log(banner.offsetHeight);
const navCoords = banner.getBoundingClientRect();
console.log(navCoords);
const aboutBlock=document.querySelector('.about-section');

function headerFixed(){
    if(pageYOffset>=navCoords.height+header.offsetHeight){
        header.classList.add('header-fixed');
        aboutBlock.style.paddingTop=16+'rem';
    }
    else{
        header.classList.remove('header-fixed');
        aboutBlock.style.paddingTop=4.5+'rem';
    }
}
window.addEventListener('scroll',headerFixed);


menu.addEventListener('click', function(e){
    if(e.target.nodeName=='LI'||e.target === this) return;
    headerNavigation.classList.remove('header-menu-show');
    console.log(e.target);
    e.preventDefault();
    const href=e.target.getAttribute('href');
    console.log(href);
    const el=document.querySelector(href);
    console.log(el);
    const top = el.getBoundingClientRect().top+window.pageYOffset-header.offsetHeight;
    console.log(el.getBoundingClientRect().bottom);
    console.log(window.pageYOffset);
    console.log(top);
    window.scrollTo({ top: top, behavior: "smooth" });
});
