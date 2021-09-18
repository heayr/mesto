// хмммм, не уверен, что это лучший способ. возможно у меня в html что-то не так построено, что темлпейт не копирует попап
import { onClickImg } from "./index.js";

const items = [
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
]

export class Card {
  constructor(link, title, templateId, cardSelector) {
    this._title = title;
    this._link = link;
    this._templateId = templateId;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // думал что templateId подгрузиться из index.js, но нет. пришлось переменную объявить
    const templateId = document.querySelector('.template-cards');
    const cardElement = templateId.content.firstElementChild.cloneNode(true);

    // const cardElement = document.querySelector(this._templateId).content.firstElementChild.cloneNode(true);

    // const cardElement = document
    //   .querySelector(this._cardSelector)
    //   .content
    //   .firstElementChild
    //   .cloneNode(true);

    return cardElement;
  }

  _likeButton(e) {
    e.target.classList.toggle('elements__cell-like_active');
  };

  _deleteCard(e) {
    e.target.closest('.elements__cell').remove();
  };

  _setEventListeners() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._deleteCard);
    this._element.querySelector('.elements__cell-like').addEventListener('click', this._likeButton);
    /* костыль для открытия popup Big Pic, потому что то, что рендерилось через Card из items по дефолту не открывакется...
    новые карточки открываются без проблем без этого */
    this._element.querySelector('.elements__image').addEventListener('click', onClickImg);

  }

  generateCard() {
    this._element = this._getTemplate();

    // this._element.querySelector('.elements__image').src = this._link;
    // this._element.querySelector('.elements__cell-title').textContent = this._title;


    const cardElementImage = this._element.querySelector('.elements__image');
    const cardElementTitle = this._element.querySelector('.elements__cell-title');
    cardElementImage.setAttribute('src', this._link);
    cardElementImage.setAttribute('alt', this._title);
    cardElementTitle.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

items.forEach((item) => {
  const card = new Card(item.link, item.name, item.like);
  const cardElement = card.generateCard();
  // Добавляем в DOM начальные карточки
  document.querySelector('.elements').append(cardElement);
});
