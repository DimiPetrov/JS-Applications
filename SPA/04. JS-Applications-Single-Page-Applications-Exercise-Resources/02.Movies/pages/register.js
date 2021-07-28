let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let registerPage = {
    setupSection,
    getView
};

export default registerPage;