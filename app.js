const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    //adds highlight class to my menu items
    // if its on desktop not mobile
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2527) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
//close mobile menu when clicking on a menu item 

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//Model items
const modal = document.querySelector('.email-modal');
const openBtn = document.getElementById('features_btn');
const closeBtn = document.querySelector('.close-btn');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


//form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}
//show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}
//check required fields
function checkRequired(inputArr) {
    for (var i = 0; i < inputArr.length; i++) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            console.log("plm");
        } else showValid(input);
    }
}
// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        var fieldName = getFieldName(input);
        showError(input, `${fieldName} must be at least ${min} characters`);
    } else if (input.value.length > max) { showError(input, `${getFieldName(input)} must be maximum of ${min} characters`); } else showValid(input);
}
//get field name
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);;
}
//check password match
function passwordMatch(input1, input2) {
    if (input1.value != input2.value)
        showError(input2, 'Password does not match');
}

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(name, email, password, passwordConfirm);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);

});

//Model-contact items
const modalContact = document.querySelector('.contact-modal');
const openBtnn = document.getElementById('contact-btn');
const closeBtnn = document.querySelector('.close-btn');

//form contact validation
const messageUser = document.getElementById('message-user');
const name1 = document.getElementById('name1');
const email1 = document.getElementById('email1');


//click events
openBtnn.addEventListener('click', () => {

    modalContact.style.display = 'block';
});
closeBtnn.addEventListener('click', () => {
    modalContact.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modalContact) {
        modalContact.style.display = 'none';
    }
});
//event listeners
modalContact.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(name1, email1, messageUser);
    checkLength(name1, 3, 30);
    checkLength(email1, 3, 30);
    checkLength(messageUser, 3, 200);

});