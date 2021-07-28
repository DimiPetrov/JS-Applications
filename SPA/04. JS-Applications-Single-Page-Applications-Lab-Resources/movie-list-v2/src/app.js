import loginPage from './loginPage.js';
import moviesPage from './moviesPage.js';
import registerPage from './registerPage.js';

let headerElement = document.querySelector('.header .nav');

let pages = {
    register: registerPage,
    login: loginPage,
    movies: moviesPage
}

headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName == 'A') {
        let datalink = e.target.getAttribute('data-link');

        if(Object.keys(pages).includes(datalink)) {
            hidePages();
            let currentView = pages[datalink];
            currentView.showPage();
        }       
    } 
});

function hidePages() {
    Object.values(pages).forEach(x => x.hidePage());
}