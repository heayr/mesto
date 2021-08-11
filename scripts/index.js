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



const popupAddPic = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const popupBigPic = document.querySelector('.popup_big');
const picturesFormTemplate = document.querySelector('.template-cards');
const templateId = document.getElementById('template');
const container = document.querySelector('.elements');
const pictureForm = document.querySelector('.popup__form-pic');
const pictureNameInput = document.querySelector('.popup__input_picture-name');
const newPictureUrlInput = popupPictures.querySelector('[name="input-picture-link"]');
const newPictureNameInput = popupPictures.querySelector('[name="input-picture-name"]');



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

  clonePicture.querySelector('.elements__image');
  clonePicture.querySelector('.elements__cell-title').textContent = i.name;
  clonePicture.querySelector('.elements__cell-like').addEventListener('click', (e) => {
    e.target.classList.toggle('elements__cell-like_active');
  })
  const newPicture = clonePicture.querySelector('.elements__image');
  newPicture.setAttribute('src', i.link);
  newPicture.setAttribute('alt', i.name);
  newPicture.addEventListener('click', onClickImg);


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

// попап галлерея

function removePopupBig(e) {
  e.preventDefault();
  popupBigPic.classList.remove('popup_opened');
}

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






// eventListener 'Ы
popupEdit.addEventListener('click', () => openPopup(popup));
popupAddPic.addEventListener('click', () => openPopup(popupPictures));
popupClose.addEventListener('click', removePopup);
popupPicClose.addEventListener('click', removePopupPic);
closeBig.addEventListener('click', removePopupBig);
formElement.addEventListener('submit', formSubmitHandler);
pictureForm.addEventListener('submit', formSubmitPictureFormHandler);


