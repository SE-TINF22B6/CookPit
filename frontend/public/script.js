const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const loginLink2 = document.querySelector('.login-link2');
const regsiterLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const passwordLink= document.querySelector('.remember-forgot');



regsiterLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });

regsiterLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
btnPopup.addEventListener('click',()=>{
        wrapper.classList.add('active-popup');
    });

 iconClose.addEventListener('click',()=>{
        wrapper.classList.remove('active-popup');
    });

passwordLink.addEventListener('click',()=>{
        wrapper.classList.add('active2');
    });

loginLink2.addEventListener('click',()=>{
        wrapper.classList.remove('active2');
        })    ;