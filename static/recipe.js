// To copy text to keyboard use:
// navigator.clipboard.writeText("Hi");

// Add ingredients tag to ingredients outline (for styling)
window.onload = function addCSSClasses() {
    let ingredientdiv = document.getElementsByClassName("outline-2")[0];
    ingredientdiv.className = "outline-2 ingredients";
};
