import './pages/index.css';
import { initialCards } from "../src/scripts/initialCards.js";

import { FormValidator } from "../src/scripts/FormValidator.js";

import Card from "../src/scripts/Card.js";
import Section from "../src/scripts/Section.js";
import { Popup } from "../src/scripts/Popup.js";
import { PopupWithImage } from "../src/scripts/PopupWithImage.js";
import PopupWithForm from "../src/scripts/PopupWithForm.js";
import UserInfo from "../src/scripts/UserInfo.js";

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

// переменные для валидации!!!
const formElement = document.querySelector('.popup__form');
const editFormModalWindow = document.getElementById('popup');
const cardFormModalWindow = document.getElementById('popup_cards');


// попап для редакции
const popupEdit = document.querySelector('.profile__edit-button');
const nameInput = formElement.querySelector('.popup__input_text-name');
const statusInput = formElement.querySelector('.popup__input_text-status');

// попап для создания новых карточек
const openCardFormButton = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const cardListSelector = document.querySelector('.elements');

// константы
const editFormValidator = new FormValidator(selectors, editFormModalWindow);
editFormValidator.enableValidation();

const cardFormValidator = new FormValidator(selectors, cardFormModalWindow);
cardFormValidator.enableValidation();

const newCardImg = new PopupWithImage(".popup-big");
// функции
function handleCardClick(title, link) {
  newCardImg.open(title, link);
}
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, handleCardClick, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  },
}, cardListSelector);

const form = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: (item) => {
    const imgCard = new Card({ title: item["input-picture-name"], link: item["input-picture-link"] },
      handleCardClick,
      '.template-cards');
    const cardElement = imgCard.generateCard();
    defaultCardList.addItem(cardElement);
    form.close();
  },
}, cardListSelector /* похоже этот селектор не влияет ни на что */);

defaultCardList.rendererItems();



const newUser = new UserInfo({ userNameSelector: '.profile__title', userSubtitleSelector: '.profile__subtitle' });


const profile = new PopupWithForm({
  popupSelector: '.popup',
  formSubmitHandler: (data) => {
    newUser.setUserInfo(data);
    profile.close();
  }
});

//  листенеры
profile.setEventListeners();

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  form.open();
});


popupEdit.addEventListener('click', () => {
  const userInfo = newUser.getUserInfo();
  nameInput.value = userInfo.title;
  statusInput.value = userInfo.subtitle;
  profile.open();
});

newCardImg.setEventListeners();
form.setEventListeners();






