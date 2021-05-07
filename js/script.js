function createBtnDelete() {
  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('class', 'btn-delete');
  btnDelete.innerHTML = 'Deletar';

  return btnDelete;
}

function deleteElement() {
  const btnDelete = document.querySelectorAll('.btn-delete');
  if (btnDelete)
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', () => {
        btnDelete[i].parentNode.remove();
      });
    }
}

function createElements(key, value) {
  const spanKey = document.createElement('span');
  spanKey.setAttribute('class', 'key');
  spanKey.append(key);

  const spanValue = document.createElement('span');
  spanValue.setAttribute('class', 'value');
  spanValue.append(value)

  const list = document.createElement('li');
  list.append(spanKey, spanValue, createBtnDelete())

  const resultDiv = document.querySelector('.result');
  resultDiv.append(list);

  deleteElement();
}

function clearForm(form) {
  for (let i = 0; i < form.elements.length - 1; i++)
    form.elements[i].value = '';
}

const form = document.forms[0];

function handleFormData() {
  const formData = new FormData(form);
  const resultDiv = document.querySelector('.result');

  if (resultDiv.innerHTML === '')
    for (let key of formData.keys())
      createElements(key, formData.get(key));
  else alert('Apague todos os campos para adicionar um novo cliente.');

  clearForm(form);
}

function handleSubmit(event) {
  event.preventDefault();
  handleFormData();
}

form.addEventListener("submit", handleSubmit);
