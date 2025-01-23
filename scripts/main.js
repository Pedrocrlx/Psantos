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

const form = document.getElementById("formValidation");
const erro = document.getElementById("erro");

form.addEventListener("submit", (event) => {
    const name = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById('number').value;
    if (!email.includes("@")) {
        event.preventDefault();
        erro.innerText = "Introduza um e-mail válido! '@' ";
    }
     else if (!name.trim()) {
        event.preventDefault();
        erro.innerText = "O campo 'Empresa' é obrigatório! ";
    } else if (!number > 0) {
        event.preventDefault();
        erro.innerText = "Introduza um número, e que tenha 9 digitos! ";
    } else {
        erro.innerText = "";
    }
})
