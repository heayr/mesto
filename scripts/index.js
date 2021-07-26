const popupEdit = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__input_name");
let statusInput = formElement.querySelector(".popup__input_status");
let profileName = document.querySelector(".profile__title");
let statusChange = document.querySelector(".profile__subtitle");



function togglePopup(event) {
  event.stopPropagation();
  popup.classList.toggle("popup__opened");

}

popupEdit.addEventListener("click", togglePopup);
popupClose.addEventListener("click", togglePopup);
// save
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  statusChange.textContent = statusInput.value;
  // строки снизу как будто ничего не делают
  nameInput.value = profileName .textContent;
  statusInput.value = statusChange.textContent;

  popup.classList.toggle("popup__opened");
  // оказалось добавить toggle сюда же в функцию самое простое

  // document.getElementsByClassName('popup__opened')[0].remove();
}

// let text = document.querySelector('.')
// document.querySelector('profile__title').textContent = '';


formElement.addEventListener("submit", formSubmitHandler);
