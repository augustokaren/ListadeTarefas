// ==========================================
// 1. Função Principal: Adicionar Tarefa
// ==========================================

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    // .trim() remove espaços em branco no início/fim, garantindo validação limpa
    let tarefaTexto = inputTarefa.value.trim(); 
    let mensagemElement = document.getElementById("mensagem");

    // 1. Validação
    if (!tarefaTexto) {
        mensagemElement.textContent = "Por favor, insira uma tarefa válida!";
        return;
    }

    // 2. Criação dos Elementos HTML
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    
    // NOVO: Cria um SPAN. Este elemento serve como um ENVOLTÓRIO exclusivo para o texto.
    // Ele é essencial para:
    // 1. Ser o alvo direto da função de edição (editarTarefa).
    // 2. Controlar o layout dentro do Flexbox, garantindo que o texto ocupe o espaço e empurre os botões para a direita.
    let spanTexto = document.createElement("span"); 
    spanTexto.textContent = tarefaTexto;
    
    // Cria um contêiner DIV para agrupar os botões (melhora a organização e o espaçamento via Flexbox no CSS)
    let botoesAcao = document.createElement("div");
    botoesAcao.className = "botoes-acao";

    // Cria o botão EDITAR
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-acao btn-editar";
    // O evento de clique chama editarTarefa() e PASSA o 'spanTexto' como argumento.
    // Isso garante que apenas o texto, e não o LI inteiro, seja alvo da edição.
    btnEditar.onclick = function() { editarTarefa(spanTexto, novaTarefa); };

    // Cria o botão EXCLUIR
    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-acao btn-excluir";
    // O evento de clique chama excluirTarefa() e PASSA o elemento 'novaTarefa' (o LI inteiro)
    btnExcluir.onclick = function() { excluirTarefa(novaTarefa); };

    // 3. Montagem da Estrutura (DOM)
    // Conecta os botões ao seu contêiner (div)
    botoesAcao.appendChild(btnEditar);
    botoesAcao.appendChild(btnExcluir);
    
    // Conecta o texto (span) e o contêiner de botões (div) ao item da lista (li)
    novaTarefa.appendChild(spanTexto); 
    novaTarefa.appendChild(botoesAcao);
    
    // Conecta o item da lista (li) ao UL principal
    listaTarefas.appendChild(novaTarefa);

    // 4. Limpeza e Feedback
    inputTarefa.value = ""; 
    mensagemElement.textContent = "Tarefa adicionada com sucesso!";
}

// ==========================================
// 2. Funções de Ação
// ==========================================

/**
 * Remove o elemento LI (item da lista) do DOM.
 * @param {HTMLElement} itemTarefa - O elemento <li> a ser removido.
 */
function excluirTarefa(itemTarefa) {
    // A função .remove() é o método mais simples para remover um elemento
    itemTarefa.remove();
    document.getElementById("mensagem").textContent = "Tarefa excluída!";
}

/**
 * Permite que o usuário edite o texto da tarefa, modificando apenas o SPAN.
 * @param {HTMLElement} spanTexto - O elemento <span> que contém o texto da tarefa (o alvo da edição).
 * @param {HTMLElement} itemTarefa - O elemento <li> pai da tarefa (não usado, mas útil para referência).
 */
function editarTarefa(spanTexto, itemTarefa) {
    // 1. Pede ao usuário o novo texto. O texto atual é o valor padrão do prompt.
    let novoTexto = prompt("Edite a tarefa:", spanTexto.textContent);

    // 2. Validação e atualização
    if (novoTexto !== null && novoTexto.trim() !== "") {
        // Atualiza apenas o conteúdo do SPAN
        spanTexto.textContent = novoTexto.trim(); 
        document.getElementById("mensagem").textContent = "Tarefa editada com sucesso!";
    } else if (novoTexto !== null) {
        // Se o usuário apertar OK com o campo vazio
        document.getElementById("mensagem").textContent = "Edição cancelada ou campo vazio.";
    } else {
        // Se o usuário apertar Cancelar (novoTexto === null)
        document.getElementById("mensagem").textContent = "Edição cancelada.";
    }
}
