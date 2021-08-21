/* Я сделал валидацию по вебинару, видимо пойду ночью писать по тренажеру второй вариант.
Хотя она вообще вполне рабочая xD*/
const formUser = document.forms.user;
const formAddCard = document.forms.card;
// массив сообщений об ошибках, в будущем можно будет добавить кастомных
const errorMessage = {
  empty: "Вы пропустили это поле.",
}
// проверка валидности инпута
function isFieldValid(input) {
  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity(errorMessage.empty);

    return false;
  }
  return input.checkValidity();
}
// написание ошибки под инпутом родителем контретного ID-шника
function validateField(input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

  isFieldValid(input);

  errorElement.innerText = input.validationMessage;
}
// тогл переключения состояния кнопки
function setSubmitButtonState(button, state) {
  if (state) {
    button.removeAttribute('disabled');
    button.classList.add('popup__submit_valid');
    button.classList.remove('popup__submit_disabled');
    return;
  }
  button.classList.add('popup__submit_disabled');
  button.classList.remove('popup__submit_valid');
  button.setAttribute('disabled', true);
}


function handlerInputForm(event) {
  const form = event.currentTarget
  const input = event.target;
  const submitButton = form.querySelector('.popup__submit');

  validateField(input);

  if (form.checkValidity()) {
    setSubmitButtonState(submitButton, true);
  } else {
    setSubmitButtonState(submitButton, false);

  }
}
// отправка формы в консоль
function sendForm(event) {
  event.preventDefault();
  const form = event.currentTarget;

  if (form.checkValidity()) {
    console.log('Отправка на сервер');
    form.reset();
  } else {
    console.log('Форма не заполнена');
  }
}
// eventListner 'Ы
formAddCard.addEventListener('submit', sendForm);
formAddCard.addEventListener('input', handlerInputForm, true);

formUser.addEventListener('submit', sendForm);
formUser.addEventListener('input', handlerInputForm, true);
