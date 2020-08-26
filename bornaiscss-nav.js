const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarLinksRight = document.getElementsByClassName("navbar-links-right")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    navbarLinksRight.classList.toggle("active");
    toggleButton.classList.toggle("active");
})

function dropdown(id){
    let text = document.getElementById(id);
    text.classList.toggle("active");
}