/**
 * DOM Caching
 */
const longpress = document.querySelector("#longpress");
const sheetContainerWrapper = document.querySelector(".sheetcontainer__wrapper");
const sheetContainerWidget = document.querySelector(".sheetcontainer__widget");
const cancelButton = document.querySelector('#cancelButton');
let longpress_timeout = 1300;
let delay;

/**
 * Bottom Action Sheet functions
 */

function openDialog() {
    sheetContainerWrapper.classList.add("display-block");
    sheetContainerWidget.classList.remove("sheet_animate_remove");
    sheetContainerWidget.classList.add("sheet_animate_add");
}

function closeDialog() {
    sheetContainerWrapper.classList.add("display-block");
    sheetContainerWidget.classList.remove("sheet_animate_add");
    sheetContainerWidget.classList.add("sheet_animate_remove");

    setTimeout(() => {
        sheetContainerWrapper.classList.remove("display-block");
    }, 200);
}

//cancel events

sheetContainerWidget.addEventListener("click", (event) => {
    event.stopPropagation();
});

sheetContainerWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
    closeDialog();
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    closeDialog();
});

// long press for desktop
longpress.addEventListener('mousedown', (event) => {
    event.preventDefault();
    delay = setTimeout(openDialog, longpress_timeout);
}, true);

longpress.addEventListener('mouseup', (event) => {
    event.preventDefault();
    clearTimeout(delay);
});

//longpress for mobile
longpress.addEventListener('touchstart', (event) => {
    event.preventDefault();
    delay = setTimeout(openDialog, longpress_timeout);
}, true);

longpress.addEventListener('touchend', (event) => {
    event.preventDefault();
    clearTimeout(delay);
});