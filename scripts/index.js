/* реализовать:
1. текст в карточках
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



const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById('template');
const container = document.querySelector('.elements');
const pictureForm = document.querySelector('.popup__form-pic');
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


// попап для картинок
function AddPicture(event) {
  event.preventDefault();
  openPopup(popupAddPic);
}

// типа рабочий код закрывает на кнопку сабмит попап картинки, остальное
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
// функция рендера начальных карточек. отображение Текста не работает
function initialCardsPrerender(i) {
  const clonePicture = templateId.content.firstElementChild.cloneNode(true);
  clonePicture.querySelector('.elements__image')
  clonePicture.querySelector('.elements__cell-title').innerText = i.name;
  const newPicture = clonePicture.querySelector('.elements__image');
  newPicture.setAttribute('src', i.link);
  newPicture.setAttribute('alt', i.name);
  // nameInput.value = ' ';
  // удаление карточки снаружи функция deletePic(e)
  clonePicture.querySelector('.elements__delete-button').addEventListener('click', deletePic);
  return clonePicture

};

for (const i of initialCards) {
  container.appendChild(initialCardsPrerender(i));
}

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

// function removePopupPic(popup_cards) {
//   popup_cards.stopPropagation();
//   popupPictures.classList.remove('popup_opened');
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
popupAddPic.addEventListener('click', () => openPopup(popupPictures));
popupClose.addEventListener('click', removePopup);
// popupPicClose.addEventListener('click', removePopupPic);
formElement.addEventListener('submit', formSubmitHandler);



