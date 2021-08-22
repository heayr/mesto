/* Я сделал валидацию по вебинару, видимо пойду ночью писать по тренажеру второй вариант.
Хотя она вообще вполне рабочая xD
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

*/
const form = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};



const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__submit_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement)
    });
  });
}
setEventListeners(form);



const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll)
    setEventListeners(formElement);
  })
}
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
//  eventListenerS for VALIDATTION
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', () => {
  checkInputValidity(form, formInput);
});
