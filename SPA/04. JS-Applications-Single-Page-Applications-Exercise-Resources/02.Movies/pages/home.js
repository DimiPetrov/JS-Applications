let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let homePage = {
    setupSection,
    getView
};

export default homePage;