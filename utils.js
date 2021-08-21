function openCalendlyPopup() {
    window.Calendly.initPopupWidget({
        url: 'https://calendly.com/blaine-thiederman1',
    });
    return false;
}

function debounce(fn, delay) {
    clearTimeout(fn._tId);
    fn._tId = setTimeout(fn, delay);
}

export { openCalendlyPopup, debounce };
