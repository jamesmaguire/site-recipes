// Add ingredients tag to ingredients outline (for styling)
// Add ul li wrapper for checkboxes
window.onload = function addCSSClasses() {
    let ingredientdiv = document.getElementsByClassName("outline-2")[0];
    ingredientdiv.className = "outline-2 ingredients";
    ingredients = document.querySelectorAll(".ingredients li");
    for (let i=0; i<ingredients.length; i++) {
        ingredients[i].innerHTML = '<label class="check"><input type="checkbox">'
            + '<span></span>' + ingredients[i].innerHTML + '</label>';
    }
};

// Tickbox functions

function copyTicked() {
    let items = document.querySelectorAll(".check");
    let text = "";
    for (let i=0; i<items.length; i++) {
        let item = items[i].getElementsByTagName("input")[0];
        if (item.checked) {
            if (text != "") {
                text += "\n";
            }
            text += items[i].innerText;
        }
    }
    navigator.clipboard.writeText(text);
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
