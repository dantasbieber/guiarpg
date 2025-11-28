try {
    const form = document.querySelector("#contato-form");
    if (!form) return;

    const nomeInput = form.querySelector("#nome");
    const assuntoSelect = form.querySelector("#assunto");
    const mensagemTextarea = form.querySelector("#mensagem");
    const enviarBtn = form.querySelector("#enviar-btn");

    function validarFormulario(e) {
        e.preventDefault();
        let valido = true;

        if (nomeInput.value.trim() === "") {
            valido = false;
            alert("O campo nome não pode estar vazio.");
        }

        if (mensagemTextarea.value.trim() === "") {
            valido = false;
            alert("A mensagem não pode ser vazia.");
        } else if (mensagemTextarea.value.length > 500) {
            valido = false;
            alert("Mensagem deve ter menos de 500 caracteres.");
        }

        if (valido) {
            alert("Agradecemos seu contato!");
            form.submit();
        }
    }

    enviarBtn.addEventListener("click", validarFormulario);

} catch (err) {
    console.log(err.message);
}
