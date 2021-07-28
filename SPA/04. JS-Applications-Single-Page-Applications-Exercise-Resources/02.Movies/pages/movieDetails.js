let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let movieDetailsPage = {
    setupSection,
    getView
};

export default movieDetailsPage;