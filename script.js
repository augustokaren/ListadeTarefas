function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    // criação de uma váriavel e com valor
 
    let inputTarefa = document.getElementById( "inputTarefa") 
    //criação de uma váriavel, que  permite o documento procurar o seu valor com base no seu id

    let tarefa = inputTarefa.value
    // Passando o valor do inputTarefa para a váriavel tarefa

    document.getElementById( "mensagem").textContent = mensagem;
    // fazer o documento procurar elemento com id mensagem e sobrepor o texto, com base no valor  dessa variavel


    if (!tarefa) {
        document.getElementById("mensagem").textContent = "Por favor, insira uma tarefa válida!";
        return;
    }
    



    let listaTarefas = document.getElementById( "listaTarefas" )
    //fazer o documento procurar qual elemento tem o id lista tarefa
   let  novaTarefa = document.createElement( "li")
    // criaçaão de um elemento filho de outra variavel e informando  que ela é uma lsita
   
   novaTarefa.textContent = tarefa
   // Informando que o texto da variavel pai vai sobrepor o da variavel filha
   
   
   listaTarefas.appendChild(novaTarefa)
   //está conectando o elemento pai com elemento filho

    inputTarefa.value= ""
    //criando um input vázio
}

