//boa pratica
window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handlerButtonClick);
}

function handlerButtonClick() {
  
  clickArray.push(getNewTimestamp());

  render();
}

function render() {
  const ul = document.querySelector('#data');
  ul.innerHTML = '';

  let lis = '';

  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });

  ul.innerHTML =  lis;

  document.title =  clickArray.length;
}