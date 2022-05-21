const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const featuresBtn = document.querySelector('.featuresBtn');
const companyBtn = document.querySelector('.companyBtn');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is_active');
    menu.classList.toggle('is_active');
    body.classList.toggle('is_active');
})

features.addEventListener('click', function() {
    if(company.classList.contains('show_drop')) {
        company.classList.remove('show_drop');
        companyBtn.classList.remove('show_drop');
    }
    features.classList.toggle('show_drop');
    featuresBtn.classList.toggle('show_drop');
})

company.addEventListener('click', function() {
    if(features.classList.contains('show_drop')) {
        features.classList.remove('show_drop');
        featuresBtn.classList.remove('show_drop');
    }
    company.classList.toggle('show_drop');
    companyBtn.classList.toggle('show_drop');
})