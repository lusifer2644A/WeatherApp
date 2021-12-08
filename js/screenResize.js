let removeNav = () => {
    console.log("removing nav");
    let nav__wrapper = document.getElementsByClassName("nav__wrapper");
    nav__wrapper.removeChild(nav__wrapper.childNodes[0]);
};

var wrapperFixer = function () {
    if (window.matchMedia("screen and max-width: 540px").matches) {
        removeNav();
    }
};

window.onload = () => {
    window.addEventListener("resize", wrapperFixer);
    wrapperFixer();
};
