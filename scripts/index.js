
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./InitialCards.js";

const classes = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

// переменные для валидации!!!
const formElement = document.querySelector('.popup__form');
const editProfile = document.getElementById('popup');
const addCard = document.getElementById('popup_cards');

// на всякий случай объеявил заного через ID
const profileValidation = new FormValidator(classes, editProfile);
// const profileValidation = new FormValidator(classes, popup);
profileValidation.enableValidation();

const cardValidation = new FormValidator(classes, addCard);
// const cardValidation = new FormValidator(classes, popupPictures);
cardValidation.enableValidation();

// попап для редакции
const popupEdit = document.querySelector('.profile__edit-button');
const closingButtons = document.querySelectorAll('.popup__close');
const popup = document.querySelector('.popup');
const nameInput = formElement.querySelector('.popup__input_text-name');
const statusInput = formElement.querySelector('.popup__input_text-status');
const profileName = document.querySelector('.profile__title');
const statusChange = document.querySelector('.profile__subtitle');

// попап для создания новых карточек
const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const popupBigPic = document.querySelector('.popup-big');
const templateId = document.getElementById('template');
const container = document.querySelector('.elements');
const pictureForm = document.querySelector('.popup__form-pic');
const newPictureUrlInput = popupPictures.querySelector('[name="input-picture-link"]');
const newPictureNameInput = popupPictures.querySelector('[name="input-picture-name"]');

// попап больших картинок
const bigImg = document.querySelector('.popup__img');
const figcaption = document.querySelector('.popup__figcaption');
const closeBig = document.querySelector('.popup__close-big')

// закрытие попапов мышкой
const allPopups = document.querySelectorAll('.popup');
const allPopupContainers = document.querySelectorAll('.popup__container');

// переменная кнопки для отключения её в форме т.к. найти её нужно 1 раз!
const disabledButton = popupPictures.querySelector('.popup__submit');

// рендер начальных карточек
initialCards.forEach((item) => {
  const card = new Card(item, '.template-cards');
  const cardElement = card.generateCard();
  container.append(cardElement);
});

// добавление картинки
function handleSubmitPictureFormHandler(evt) {
  evt.preventDefault();
  const cardName = newPictureNameInput.value;
  const cardUrl = newPictureUrlInput.value;
  const item = {
    title: cardName,
    link: cardUrl,
    alt: cardName
  };
  pictureForm.reset();
  closePopup(popupPictures);
  // создаёт новую карточку перед уже созданными

  container.prepend(createCard(item));
  console.log(item);

}

// новая функция рендера карточки через Class Card
function createCard(item) {
  return (new Card(item, '#template')).generateCard();
}

// Функция отключения кнопки
function buttonDisableWhenOpened(popupAddPic) {
  disabledButton.classList.add('popup__submit_disabled');
  disabledButton.setAttribute('disabled', true);
}

// Функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", onEscapeKey);
}

// функция закрытия попапов на крестик, кнопки выбираются автоматически благодаря функции onClickClosePopup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", onEscapeKey);
}

function onClickClosePopup(evt) {
  closePopup(evt.target.closest('.popup'));
}

function onClickEdit() {
  nameInput.value = profileName.textContent;
  statusInput.value = statusChange.textContent;
  openPopup(popup);
}


// save and close of popup info
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  statusChange.textContent = statusInput.value;
  closePopup(popup);
}

//Закрытие popup кнопкой Escape
function onEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// Не позволяет закрывать popup внутри контейнера popup
allPopupContainers.forEach((doNotClose) => {
  doNotClose.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
})


//блокировка Закрытия popup__img кликом по картинке
bigImg.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

// Закрытие popup мышкой
allPopups.forEach((popup) => {
  popup.addEventListener('click', onClickClosePopup);
});

// попап большие картинки
function onClickImg(e) {
  const bigLink = e.target.getAttribute('src');
  const bigTxt = e.target.getAttribute('alt');
  bigImg.setAttribute('src', bigLink);
  bigImg.setAttribute('alt', bigTxt);
  figcaption.textContent = bigTxt;
  openPopup(popupBigPic);
}
export { onClickImg };





// eventListener'Ы

popupEdit.addEventListener('click', onClickEdit);
popupAddPic.addEventListener('click', () => openPopup(popupPictures));

formElement.addEventListener('submit', formSubmitHandler);
pictureForm.addEventListener('submit', handleSubmitPictureFormHandler);
//листнер+функция внутри него, которая выбирает все кнопки close в document с параметром closest к popup - гениально
closingButtons.forEach(button => button.addEventListener('click', onClickClosePopup));
popupAddPic.addEventListener('click', () => buttonDisableWhenOpened(popupPictures));


