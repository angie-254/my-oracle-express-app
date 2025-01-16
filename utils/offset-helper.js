
function pageOffset(page, size) {
    console.log({page, size});
    return (page - 1) * size;
}

module.exports = { pageOffset };