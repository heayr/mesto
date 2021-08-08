// начальные карточки

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];
// попап для картинок

function AddPicture(event) {
  event.preventDefault();
  openPopup(popupAddPic);
}

const popupAddPic = document.querySelector(".profile__add-button");
const popupPictures = document.querySelector(".popup_cards");
const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById("template");
const container = document.querySelector(".elements");

/* типа рабочий код закрывает на кнопку сабмит попап картинки
const pictureForm = document.querySelector(".popup__form-pic");
pictureForm.addEventListener("submit", (event) => {
  event.preventDefault();
  popupPictures.classList.remove("popup_opened");
});*/

// что с этим делать вообще хз
function initialCardsPrerender(i) {
  const clonePicture = templateId.content.firstElementChild.cloneNode(true);
  const newPicture = clonePicture.querySelector(".elements__image");
  newPicture.setAttribute("src", i.link);
  newPicture.setAttribute("alt", i.name);
  return clonePicture
};

for (const i of initialCards) {
  container.appendChild(initialCardsPrerender(i));
}




























// попап для картинок
/* function AddPicture(event) {
  event.preventDefault();
  openPopup(popupAddPic);
}
const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
// const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById('template');
const renderElements = document.querySelector('.elements');
function initCards(i) {
  const newCard = templateId.content.firstElementChild.cloneNode(true);
  newCard.querySelector('.elements__image');
  newCard.setAttribute("src", i.link);
  newCard.setAttribute("alt", i.name);
  newCard.querySelector('.elements__delete-button').addEventListener('click', (e) => {
    e.target.closest('.elements').remove();
  });
  // renderElements.appendChild(newCard);
  return newCard
};

for (const i of initialCards) {
  container.appendChild(initCards(i));




   типа рабочий код закрывает на кнопку сабмит попап картинки
  const pictureForm = document.querySelector('.popup__form-pic');
  pictureForm.addEventListener('submit', (event) => {
    event.preventDefault();
    popupPictures.classList.remove('popup_opened');
    // debugger;
  });
  */












// попап для рекдакции
const popupEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popupPicClose = document.querySelector('.popup__close_pic');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_text_name');
let statusInput = formElement.querySelector('.popup__input_text_status');
let profileName = document.querySelector('.profile__title');
let statusChange = document.querySelector('.profile__subtitle');





// function initialCardsPrerender(i) {
//   const clonePicture = templateId.content.firstElementChild.cloneNode(true);
//   newPicture.querySelector('.elements__image');
//   newPicture.setAttribute('src', i.link);
//   newPicture.setAttribute('alt', i.name);

//   picturesFormTemplate.prepend(clonePicture);


// }





// let nameInput = formElement.querySelector('.popup__input_text_name');
// let statusInput = formElement.querySelector('.popup__input_text_status');


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

// function removePop() {
//   popup.classList.remove('popup_opened');
// }

// function removePopup2() {
//   closePopup.querySelectorAll('.popup__container')[0].addEventListener('click', removePop);
// }

// save and close of popup info
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  statusChange.textContent = statusInput.value;
  popup.classList.remove('popup_opened');
  removePopup(evt);
}

// eventListener 'Ы
popupEdit.addEventListener('click', () => openPopup(popup));
// popupAddPic.addEventListener('click', () => openPopup(popupPictures));
popupClose.addEventListener('click', removePopup);
popupPicClose.addEventListener('click', removePopupPic);
formElement.addEventListener('submit', formSubmitHandler);



