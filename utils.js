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

export { openCalendlyPopup, debounce, toTitleCase };
