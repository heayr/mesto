const popupEdit = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
// думал как реализовать закрытие если нажать кнопкой мыши вне попапа, пока не придумал
// const popupCloseBack = document.querySelector('.popup__opened');

const popup = document.querySelector(".popup");

const popupContent = document.querySelector(".popup__container");

function togglePopup(event) {
  event.stopPropagation();
  popup.classList.toggle("popup__opened");
}

popupEdit.addEventListener("click", togglePopup);
popupClose.addEventListener("click", togglePopup);
// popupCloseBack.addEventListener('click', togglePopup);

// save

let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let statusInput = formElement.querySelector(".popup__status");

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameChange = document.querySelector(".profile__title");
  nameChange.textContent = nameInput.value;

  let jobChange = document.querySelector(".profile__subtitle");
  jobChange.textContent = statusInput.value;

  // popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
