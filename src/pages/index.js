import './index.css';
import { initialCards } from "../utils/constants";
import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { parameters } from '../utils/constants';
import { profileForm } from '../utils/constants';
import { popupEditButton } from '../utils/constants';
import { nameInput } from '../utils/constants';
import { statusInput } from '../utils/constants';
import { openCardFormButton } from '../utils/constants';
import { popupPictures } from '../utils/constants';
import { cardListSelector } from '../utils/constants';

import { editFormModalWindow } from '../utils/constants';
import { cardFormModalWindow } from '../utils/constants';

const editFormValidator = new FormValidator(parameters, editFormModalWindow);
editFormValidator.enableValidation();
const cardFormValidator = new FormValidator(parameters, cardFormModalWindow);
cardFormValidator.enableValidation();
const newCardImg = new PopupWithImage(".popup-big");
const newUser = new UserInfo({ userName: '.profile__title', userSubtitle: '.profile__subtitle' });


// функции
function handleCardClick(title, link) {
  newCardImg.open(title, link);
}


const createCard = (item) => {
  const newCardMesto = new Card(item, handleCardClick, '.template-cards');
  return newCardMesto.generateCard();
}

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    defaultCardList.addItem(createCard(item))
  }
}, '.elements');

// const addCardPopup = new PopupWithForm({
//   popupSelector: '.popup_cards',
//   formSubmitHandler: (item) => {
//     const imgCard = new Card({ title: item["input-picture-name"], link: item["input-picture-link"] },
//       handleCardClick,
//       '.template-cards');
//     const cardElement = imgCard.generateCard();
//     defaultCardList.addItem(cardElement);
//     addCardPopup.close();
//   },
// });
// const cardOp = document.querySelector('.popup_cards');
// const addCardPopup = new PopupWithForm(cardOp, (item) => {
//   defaultCardList.addItem(createCard(item));
//   addCardPopup.close()
// });

const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: (item) => {
    defaultCardList.addItem(createCard({ title: item["input-picture-name"], link: item["input-picture-link"] }));
    addCardPopup.close()
  }
});

defaultCardList.rendererItems();

const profilePopup = new PopupWithForm({
  popupSelector: '.popup',
  formSubmitHandler: (data) => {
    newUser.setUserInfo(data);
    profilePopup.close();
  }
});

//  листенеры
profilePopup.setEventListeners();

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  addCardPopup.open();
});


popupEditButton.addEventListener('click', () => {
  const userInfo = newUser.getUserInfo();
  nameInput.value = userInfo.title;
  statusInput.value = userInfo.subtitle;
  profilePopup.open();
});

newCardImg.setEventListeners();
addCardPopup.setEventListeners();






