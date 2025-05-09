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
