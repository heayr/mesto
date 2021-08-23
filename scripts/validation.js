// показать в инпуте ошибку
// Находим элемент ошибки внутри самой функции
const showInputError = (formElement, inputElement, errorMessage, classes) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(classes.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(classes.errorClass);
};
// скрыть ошибку в инпуте
// Находим элемент ошибки
const hideInputError = (formElement, inputElement, classes) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(classes.inputErrorClass);
  errorElement.classList.remove(classes.errorClass);
  errorElement.textContent = '';
};
// проверить валидность
const checkInputValidity = (formElement, inputElement, classes) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, classes);
  } else {
    hideInputError(formElement, inputElement, classes);
  }
};


// функция проверки массива инпутов
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};

// тогл кнопки "сохранить" связана с функцией hasInvalidInput, которая проверяет есть хоть одно невалидное совпадение
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// функция обновления валидации в инпутах и создание массива инпутов
function setEventListeners(formElement, classes) {
  const inputList = Array.from(formElement.querySelectorAll(classes.inputSelector));
  const buttonElement = formElement.querySelector(classes.submitButtonSelector);

  // toggleButtonState(inputList, buttonElement, classes.inactiveButtonClass); в данном случае не будем блокировать кнопку с самого начала

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, classes);
      toggleButtonState(inputList, buttonElement, classes.inactiveButtonClass);
    });
  });
}

// Функция enableValidation найдёт на странице и обработает все формы с классом '.popup__form'
// Найдём все формы с указанным классом в DOM,
// сделаем из них массив методом Array.from
const enableValidation = (classes) => {
  const formList = Array.from(document.querySelectorAll(classes.formSelector));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, classes);
  })
}

// Вызовем функцию с заданными параметрами классов назовем - classes
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
});
