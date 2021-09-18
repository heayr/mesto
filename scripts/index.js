
import { Card } from "./Card.js";


// переменные для валидации!!!
const formElement = document.querySelector('.popup__form');

// попап для редакции
const popupEdit = document.querySelector('.profile__edit-button');
const closingButtons = document.querySelectorAll('.popup__close');
const popupPicClose = document.querySelector('.popup__close_pic');
const popup = document.querySelector('.popup');
const nameInput = formElement.querySelector('.popup__input_text-name');
const statusInput = formElement.querySelector('.popup__input_text-status');
const profileName = document.querySelector('.profile__title');
const statusChange = document.querySelector('.profile__subtitle');

// попап для создания новых карточек
const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const popupBigPic = document.querySelector('.popup-big');
const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById('template');
const container = document.querySelector('.elements');
const pictureForm = document.querySelector('.popup__form-pic');
const pictureNameInput = document.querySelector('.popup__input_picture-name');
const newPictureUrlInput = popupPictures.querySelector('[name="input-picture-link"]');
const newPictureNameInput = popupPictures.querySelector('[name="input-picture-name"]');
const buttonCard = document.querySelector('.popup__submit-pic');

// попап больших картинок
const bigImg = document.querySelector('.popup__img');
const figcaption = document.querySelector('.popup__figcaption');
const closeBig = document.querySelector('.popup__close-big')

// закрытие попапов мышкой
const allPopups = document.querySelectorAll('.popup');
const AllPopupContainers = document.querySelectorAll('.popup__container');

// переменная кнопки для отключения её в форме т.к. найти её нужно 1 раз!
const disabledButton = popupPictures.querySelector('.popup__submit');


/*
// функция рендера начальных карточек.
function createCard(i) {
  const clonePicture = templateId.content.firstElementChild.cloneNode(true);
  clonePicture.querySelector('.elements__cell-title').textContent = i.name;
  clonePicture.querySelector('.elements__cell-like').addEventListener('click', (e) => {
    e.target.classList.toggle('elements__cell-like_active');
  })

  const newPicture = clonePicture.querySelector('.elements__image');
  // краткая запись атрибутов
  newPicture.src = i.link;
  newPicture.alt = i.name;

  newPicture.addEventListener('click', onClickImg);

  // удаление карточки снаружи функция - deletePic(e)
  // clonePicture.querySelector('.elements__delete-button').addEventListener('click', deletePic);
  return clonePicture;
};

*/

// перебор массива
// for (const i of initialCards) {
//   container.appendChild(createCard(i));
// }

// чёт до меня долго доходило, что нужно просто представить это как своеобразный
// массив, и вызывать его можно отдельно вне функции createCard. было дублирование ранее
function formSubmitPictureFormHandler(evt) {
  evt.preventDefault();
  const cardName = newPictureNameInput.value;
  const cardUrl = newPictureUrlInput.value;
  /*const data = {
    name: cardName,
    link: cardUrl,
    alt: cardName
  };*/
  //  сброс формы теперь внутри основной функции т.е. локально
  pictureForm.reset();
  // при закрытии важно не только вызвать функцию, но и выбрать, что закрывать в скобках
  closePopup(popupPictures);

  // создаёт новую карточку перед уже созданными
  container.prepend(createCard(cardName, cardUrl));
}

function createCard(cardName, cardUrl) {
  return (new Card(cardUrl, cardName, templateId)).generateCard();
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
AllPopupContainers.forEach((doNotClose) => {
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
pictureForm.addEventListener('submit', formSubmitPictureFormHandler);
//листнер+функция внутри него, которая выбирает все кнопки close в document с параметром closest к popup - гениально
closingButtons.forEach(button => button.addEventListener('click', onClickClosePopup));
popupAddPic.addEventListener('click', () => buttonDisableWhenOpened(popupPictures));


