function openCalendlyPopup() {
    window.Calendly.initPopupWidget({
        url: 'https://calendly.com/progresswealth',
    });
    return false;
}

function debounce(fn, delay) {
    clearTimeout(fn._tId);
    fn._tId = setTimeout(fn, delay);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function scrollToId(id, additionalOffset = 0) {
    if (window.scrollTo) {
        const offsetTop = document.getElementById(id)?.offsetTop || 0;
        window.scrollTo({
            top: offsetTop + additionalOffset,
            behavior: 'smooth',
        });
    }
}

export { openCalendlyPopup, debounce, toTitleCase, scrollToId };
