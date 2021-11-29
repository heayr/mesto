<<<<<<< Updated upstream
/* реализовать:
1. текст в карточках СДЕЛАНО
2. отображение новых карточек
3. лайки
4. открытие попапов картинок
*/
// начальные карточки

const initialCards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
=======

import { initialCards } from "./initialCards.js";

import { FormValidator } from "./FormValidator.js";

import Card from "./Card.js";
import Section from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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
>>>>>>> Stashed changes



const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
<<<<<<< Updated upstream
const popupBigPic = document.querySelector('.popup_big');
const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById('template');
const container = document.querySelector('.elements');
=======
const popupBigPic = document.querySelector('.popup-big');
// const templateId = document.getElementById('template');
// const container = document.querySelector('.elements');
const cardListSelector = document.querySelector('.elements');

>>>>>>> Stashed changes
const pictureForm = document.querySelector('.popup__form-pic');
const pictureNameInput = document.querySelector('.popup__input_picture-name');
const newPictureUrlInput = popupPictures.querySelector('[name="input-picture-link"]');
const newPictureNameInput = popupPictures.querySelector('[name="input-picture-name"]');
const imgNameInput = popupPictures.querySelector('.input-picture-name');
const imgUrlInput = popupPictures.querySelector('.input-picture-link');

<<<<<<< Updated upstream
=======
// попап больших картинок
const bigImg = document.querySelector('.popup__img');
const figcaption = document.querySelector('.popup__figcaption');
const closeBig = document.querySelector('.popup__close-big')
>>>>>>> Stashed changes


// попап для рекдакции
const popupEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popupPicClose = document.querySelector('.popup__close_pic');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_text_name');
const statusInput = formElement.querySelector('.popup__input_text_status');
const profileName = document.querySelector('.profile__title');
const statusChange = document.querySelector('.profile__subtitle');

<<<<<<< Updated upstream

// попап для картинок
function AddPicture(event) {
  event.preventDefault();
  openPopup(popupAddPic);
}

// типа рабочий код закрывает на кнопку SUBMIT попап картинки, остальное
pictureForm.addEventListener('submit', (event) => {
  event.preventDefault();
  popupPictures.classList.remove('popup_opened');
  // const nameInput = document.querySelector('.popup__input_picture-name').value = '';
  // const urlInput = document.querySelector('.popup__input_picture-link').value = '';
})

// функция удаления карточки через таргет
function deletePic(e) {
  e.target.closest('.elements__cell').remove();
}
// функция рендера начальных карточек.
function initialCardsPrerender(i) {
  const clonePicture = templateId.content.firstElementChild.cloneNode(true);
=======
// function handleCardClick() {
// newCardImg.open();
// }
// const cardImage = document.querySelector('.elements__image');

const newCardImg = new PopupWithImage('.popup-big');
// newCardImg.setEventListeners();


const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        newCardImg.open(item);
      }
    }, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  },
},
  cardListSelector);



// const form = new PopupWithForm({
//   popupSelector: '.popup_cards',
//   formSubmitHandler: (formData) => {
//     // form.open();
//     const card = new Card(formData, handleCardClick, '.template-cards');
//     const cardElement = card.generateCard();
//     defaultCardList.addItem(cardElement);
//     form.close();
//   }
// });
const form = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: () => {
    const cardObj = {};
    cardObj.title = imgNameInput.value;
    cardObj.link = imgUrlInput.value;
    const card = new Card({
      data: cardObj, handleCardClick: () => {
        newCardImg.open(cardObj);
      }
    }, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
    form.close();
  }
});
defaultCardList.rendererItems();




>>>>>>> Stashed changes

  clonePicture.querySelector('.elements__image');
  clonePicture.querySelector('.elements__cell-title').textContent = i.name;
  clonePicture.querySelector('.elements__cell-like').addEventListener('click', (e) => {
    e.target.classList.toggle('elements__cell-like_active');
  })
  const newPicture = clonePicture.querySelector('.elements__image');
  newPicture.setAttribute('src', i.link);
  newPicture.setAttribute('alt', i.name);
  newPicture.addEventListener('click', onClickImg);


<<<<<<< Updated upstream
  // удаление карточки снаружи функция deletePic(e)
  clonePicture.querySelector('.elements__delete-button').addEventListener('click', deletePic);

  return clonePicture;

};

for (const i of initialCards) {
  container.appendChild(initialCardsPrerender(i));
}


// функция добавления карточки
pictureForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newImage = templateId.content.firstElementChild.cloneNode(true);
  newImage.querySelector('.elements__image').textContent = pictureNameInput.value;
  newImage.querySelector('.elements__delete-button').addEventListener('click', deletePic);
  // это тут более не нужно, вызываем в следующей функции
  // container.prepend(newImage);
  // возникло дублирование тут!!!!
})

// чёт до меня долго доходило, что нужно просто представить это как своеобразный
// массив, и вызывать его можно отдельно вне функции. было дублирование раанее
function formSubmitPictureFormHandler(evt) {
  evt.preventDefault();
  const cardName = newPictureNameInput.value;
  const cardUrl = newPictureUrlInput.value;
  const data = {
    name: cardName,
    link: cardUrl,
    alt: cardName
  };

  container.prepend(initialCardsPrerender(data));
}
//  сюрос формы
document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset(pictureForm);
})

// Функция открытия popup и копирования данных из титула и подтитула

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

nameInput.value = profileName.textContent;
statusInput.value = statusChange.textContent;

// Функция закрытия popup

function removePopup(event) {
  event.stopPropagation();
  popup.classList.remove('popup_opened')
}

function removePopupPic(popup_cards) {
  popup_cards.stopPropagation();
  popupPictures.classList.remove('popup_opened');
}

// save and close of popup info
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  statusChange.textContent = statusInput.value;
  popup.classList.remove('popup_opened');
  removePopup(evt);
}
=======
openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();

});







>>>>>>> Stashed changes

// попап галлерея

function removePopupBig(e) {
  e.preventDefault();
  popupBigPic.classList.remove('popup_opened');
}

<<<<<<< Updated upstream
const bigImg = document.querySelector('.popup__img');
const galleryCapture = document.querySelector('.popup__figcaption');
// const popupGallery = document.querySelector('.popup_big');
const closeBig = document.querySelector('.popup__close_big')
// const popupBigPic = document.querySelector('.popup_big')

function onClickImg(e) {
  const bigLink = e.target.getAttribute('src');
  const bigTxt = e.target.getAttribute('alt');
  bigImg.setAttribute('src', bigLink);
  bigImg.setAttribute('alt', bigTxt);
  galleryCapture.textContent = bigTxt;
  openPopup(popupBigPic);
}
=======
//блокировка Закрытия popup__img кликом по картинке
bigImg.addEventListener('click', (evt) => {
  evt.stopPropagation();
});


>>>>>>> Stashed changes






<<<<<<< Updated upstream
// eventListener 'Ы
popupEdit.addEventListener('click', () => openPopup(popup));
popupAddPic.addEventListener('click', () => openPopup(popupPictures));
popupClose.addEventListener('click', removePopup);
popupPicClose.addEventListener('click', removePopupPic);
closeBig.addEventListener('click', removePopupBig);
formElement.addEventListener('submit', formSubmitHandler);
pictureForm.addEventListener('submit', formSubmitPictureFormHandler);
=======
>>>>>>> Stashed changes


