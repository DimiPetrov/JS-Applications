import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";

let views = {
    'home-link': homePage.getView,
    'login-link': loginPage.getView,
    'register-link': registerPage.getView
}

function initialize() {
    let allLinks = document.querySelectorAll('.link');
    allLinks.forEach(a => a.addEventListener('click', changeViewHandler));
}

async function changeViewHandler(e) {
    let id = e.target.id;
    console.log(id);
    if (views.hasOwnProperty(id)) {
        let view = await views[id]();
        let app = document.getElementById('main');
        app.querySelectorAll('.view').forEach(v => v.remove());
        app.appendChild(view);
    }

}

let viewChanger = {
    initialize
};

export default viewChanger;