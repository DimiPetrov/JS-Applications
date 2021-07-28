import loginPage from './pages/login.js';
import registerPage from './pages/register.js';
import homePage from './pages/home.js';
import addMoviePage from './pages/addMovie.js';
import movieDetailsPage from './pages/movieDetails.js';
import editMoviePage from './pages/editMovie.js';

setup();

async function setup() {
    let appElement = document.getElementById('main');

    loginPage.setupSection(document.getElementById('form-login'));
    registerPage.setupSection(document.getElementById('form-sign-up'));
    homePage.setupSection(document.getElementById('home-page'));
    addMoviePage.setupSection(document.getElementById('add-movie'));
    movieDetailsPage.setupSection(document.getElementById('movie-details'));
    editMoviePage.setupSection(document.getElementById('edit-movie'));
    viewChanger.initialize();

    appElement.querySelectorAll('.view').forEach(v => v.remove());

    let homePageView = await homePage.getView();
    appElement.appendChild(homePageView);
}