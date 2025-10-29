// script.js

document.addEventListener("DOMContentLoaded", function () {
  const inputTarefa = document.getElementById("inputTarefa");
  const btnAdicionar = document.getElementById("btnAdicionar");
  const listaTarefas = document.getElementById("listaTarefas");
  const mensagem = document.getElementById("mensagem");

  btnAdicionar.addEventListener("click", adicionarTarefa);
  inputTarefa.addEventListener("keypress", function (e) {
    if (e.key === "Enter") adicionarTarefa();
  });

  function adicionarTarefa() {
    const tarefaTexto = inputTarefa.value.trim();
    if (!tarefaTexto) {
      mensagem.textContent = "Por favor, insira uma tarefa válida!";
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tarefaTexto;

    const botoes = document.createElement("div");
    botoes.classList.add("botoes-acao");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("btn-acao", "btn-editar");
    btnEditar.addEventListener("click", () => editarTarefa(span));

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("btn-acao", "btn-excluir");
    btnExcluir.addEventListener("click", () => excluirTarefa(li));

    botoes.append(btnEditar, btnExcluir);
    li.append(span, botoes);
    listaTarefas.append(li);

    inputTarefa.value = "";
    mensagem.textContent = "Tarefa adicionada com sucesso!";
  }

  function excluirTarefa(li) {
    li.remove();
    mensagem.textContent = "Tarefa excluída!";
  }

  function editarTarefa(span) {
    const novoTexto = prompt("Edite a tarefa:", span.textContent);
    if (novoTexto === null) {
      mensagem.textContent = "Edição cancelada.";
      return;
    }

    if (novoTexto.trim() === "") {
      mensagem.textContent = "Campo vazio. Nenhuma alteração feita.";
      return;
    }

    span.textContent = novoTexto.trim();
    mensagem.textContent = "Tarefa editada com sucesso!";
  }
});
