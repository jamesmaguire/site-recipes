// Add ingredients tag to ingredients outline (for styling)
// Add ul li wrapper for checkboxes
window.onload = function addCSSClasses() {
    // Add check boxes to ingredients
    let ingredientdiv = document.getElementsByClassName("outline-2")[0];
    ingredientdiv.className = "outline-2 ingredients";
    ingredients = document.querySelectorAll(".ingredients li");
    for (let i=0; i<ingredients.length; i++) {
        ingredients[i].innerHTML = '<label class="check"><input type="checkbox">'
            + '<span></span>' + ingredients[i].innerHTML + '</label>';
    }
    // Add check boxes to method
    let methoddiv = document.getElementsByClassName("outline-2")[1];
    methoddiv.className = "outline-2 method";
    method = document.querySelectorAll(".method li");
    for (let i=0; i<method.length; i++) {
        method[i].innerHTML = '<label class="check"><input type="checkbox">'
            + '<span></span>' + method[i].innerHTML + '</label>';
    }
};

// Tickbox functions

function copyTicked() {
    let items = document.querySelectorAll(".ingredients .check");
    let text = "";
    for (let i=0; i<items.length; i++) {
        let item = items[i].getElementsByTagName("input")[0];
        if (item.checked) {
            if (text != "") {
                text += "\r\n";
            }
            text += items[i].innerText;
        }
    }
    if (text) {
        document.getElementById("notify").innerText = "Copied!";
        navigator.clipboard.writeText(text);
        displayNotification();
    } else {
        document.getElementById("notify").innerText = "Tick items to copy";
        displayNotification();
    }
}
function displayNotification() {
    document.getElementById("notify").style.visibility = "visible";
    setTimeout(() => document.getElementById("notify").style.visibility = "hidden", 1000);
}

function untickAll() {
    let items = document.querySelectorAll(".check");
    for (let i=0; i<items.length; i++) {
        let item = items[i].getElementsByTagName("input")[0];
        if (item.checked) {
            item.checked = false;
        }
    }
}
