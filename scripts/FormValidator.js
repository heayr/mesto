export class FormValidator {
  constructor(classes, formElement) {
    this._classes = classes;
    this._formElement - formElement;
  };

  // показать в инпуте ошибку
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._classes.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._classes.errorClass)
  };
  // скрыть ошибку в инпуте
  // Находим элемент ошибки
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._classes.inputErrorClass);
    errorElement.classList.remove(this._classes.errorClass);
    errorElement.textContent = '';
  };
  // проверить валидность
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };
  // функция проверки массива инпутов
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  }
  // тогл кнопки "сохранить" связана с функцией hasInvalidInput, которая проверяет есть хоть одно невалидное совпадение
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._classes.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._classes.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  // функция обновления валидации в инпутах и создание массива инпутов
  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._classes.inputSelector));
    const buttonElement = formElement.querySelector(this._classes.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, this._classes.inactiveButtonClass);
      });
    });
  };

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._classes.formSelector));
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  }
}
