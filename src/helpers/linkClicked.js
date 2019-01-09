const linkClicked = (e, url) => {
    e.preventDefault();
    console.log(url);
    window.open(url, '_blank');
}

module.exports = linkClicked;