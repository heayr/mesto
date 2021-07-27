// переменные и константы
const popupEdit = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_text_name");
let statusInput = formElement.querySelector(".popup__input_text_status");
let profileName = document.querySelector(".profile__title");
let statusChange = document.querySelector(".profile__subtitle");

// Функция открытия popup и копирования данных из титула и подтитула
function openPopup(event) {
  event.stopPropagation();
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent;
  statusInput.value = statusChange.textContent;
}
// Функция закрытия popup
function removePopup(event) {
  event.stopPropagation();
  popup.classList.remove('popup_opened')
}

// save and close of popup info
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  statusChange.textContent = statusInput.value;
  // popup.classList.remove("popup_opened");
  removePopup(evt);
}

// eventListener 'Ы
popupEdit.addEventListener("click", openPopup);
popupClose.addEventListener("click", removePopup);
formElement.addEventListener("submit", formSubmitHandler);


//  Вопрос, написал код, он работает, а как в итоге понять, что он работает не так, если в консоле нет ошибок и код исполняется типа правильно.

// Как с этим было

// " let formElement = document.querySelector(".popup__container");
// Тут должна быть форма." В итоге я понял, что я не ту обертку выбрал, нужно всегда выбирать ту,
//  что ближе .popup__form явно будет родителем импутов, поэтому лучше его взять

// Может помимо документации есть что-то, что стоит почитать в когда-нибудь свободное время, чтобы лучше понять JS? или лцше с практикой закреплять всё?
