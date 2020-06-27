function indexFilter() {
    // Variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filterInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("org-ul");

    // Loop through all list items, and hide those who don't match the search query
    for (u = 0; u < ul.length; u++) {
        li = ul[u].getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
