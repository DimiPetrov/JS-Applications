let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let loginPage = {
    setupSection,
    getView
};

export default loginPage;