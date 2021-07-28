let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let nav = {
    setupSection,
    getView
};

export default nav;