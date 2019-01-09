const linkClicked = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
}

module.exports = linkClicked;