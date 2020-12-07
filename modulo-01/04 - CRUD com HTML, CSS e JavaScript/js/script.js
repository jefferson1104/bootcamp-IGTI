window.addEventListener('load', start);


//declarando variaveis globais
var globalNames = ['Jhon', 'Mary', 'Edward'];
var inputName =  null;
var currentIndex = null;
var isEditing = false;


function start() {
  //referenciando o campo inputName do formulario
  inputName =  document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();  
  render();
}


//funcao para evitar o recarregamento padrao do form 
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}


/* 
  funcao para iniciar a pagina com foco no campo Nome.
  funcao com evento para tecla Enter quando pressionada 
  enviar dados digitados pelo formulario e gravando em um 
  vetor que esta em uma variavel global chamada `globalNames`
  com o metodo push().
*/
function activateInput() {
  //funcao para adicionar nome
  function insertName(newName){ 
    globalNames.push(newName);
  }

  //funcao para editar nome
  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  function handleTyping(event) {
    //nao permitir inclusao sem dados
    var hasText = !!event.target.value && event.target.value.trim() !== '';
    if (!hasText) {
      alert('Voce nao informou nenhum nome!');
      return;
    }

    //usando funcao para editar ou adicionar dado
    if (event.key === 'Enter') {
      if(isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
    }
  }
  
  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}


/* 
  funcao para criar uma lista no html e renderizar as informacoes
  de acordo com os dados digitados e guardados no vetor.
  botao para deletar a informacao.
*/
function render() {
  //criar um botao e criar o delete
  function createDeleteButton (index){
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName)
    return button;
  }

  //criar um span, e criar o edit 
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent =  name;
    span.addEventListener('click', editItem);
    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for(var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    
    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);


    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

//funcao para limpar o input apos cadastrar o dado informado
function clearInput() {
  inputName.value = '';
  inputName.focus();
}