function validarFormulario() {
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        alert("Formulário válido! O número B é maior que A.");
        
    } else {
        alert("Formulário inválido! O número B deve ser maior que A.");
        mensagem.style.color = "red";
    }
}