function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + 
    novaAnotacao + "</p>"
    document.getElementById("anotacao").value = " " 
    alert("anotação salva \ncom sucesso")

}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})