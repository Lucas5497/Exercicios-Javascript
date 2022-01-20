const form = document.getElementById("tarefas-form");
const listaTarefas = document.getElementById("tarefas");

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('entrada-tarefas');
    addTarefa(inputField.value);
    form.reset();
};

function addTarefa(descrição){
    const tarefaContainer = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const tarefaLabel = document.createElement('label');
    const descricaoTarefaNode = document.createTextNode(descrição);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descrição);
    novaTarefa.setAttribute('id', descrição);

    tarefaLabel.setAttribute('for', descrição);
    tarefaLabel.appendChild(descricaoTarefaNode);

    tarefaContainer.classList.add('tarefa-item');
    tarefaContainer.appendChild(novaTarefa);
    tarefaContainer.appendChild(tarefaLabel);

    listaTarefas.appendChild(tarefaContainer);
};