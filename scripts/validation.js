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

const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};



const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function setEventListeners(formElement, selectors) {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors.inactiveButtonClass);
    });
  });
}


const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll)
    setEventListeners(formElement, selectors);
  })
}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
});

