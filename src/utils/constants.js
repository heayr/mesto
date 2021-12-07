export const initialCards = [
  {
    title: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

export const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

// переменные для валидации!!!
export const profileForm = document.forms.user;
export const editFormModalWindow = document.getElementById('popup');
export const cardFormModalWindow = document.getElementById('popup_cards');


// попап для редакции
export const popupEditButton = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('.popup__input_text-name');
export const statusInput = document.querySelector('.popup__input_text-status');

// попап для создания новых карточек
export const openCardFormButton = document.querySelector('.profile__add-button');
export const popupPictures = document.querySelector('.popup_cards');
export const cardListSelector = document.querySelector('.elements');



