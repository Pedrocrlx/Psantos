async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
}

async function loadFooter() {
    const response = await fetch("components/footer.html");
    const navbarHtml = await response.text();
    document.getElementById("footer").innerHTML = navbarHtml;
}

function socialGitHub() {
    window.location.href = "https://github.com/Pedrocrlx";  // URL de destino
}

function socialLinkedin() {
    window.location.href = "https://linkedin.com";  // URL de destino
}

loadFooter();
loadNavbar();