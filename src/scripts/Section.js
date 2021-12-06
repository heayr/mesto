export default class Section {
  constructor({ data, renderer }, cardListSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    // this._container = document.querySelector(cardListSelector);
    /*когда такое написание document.querySelector(cardListSelector)
     в функции рендера нужно использовать
    именно '.elements' для обозначения селектора в коде!*/

    this._container = cardListSelector;
    /* когда такое написание в коде используем сразу cardListSelector */

  }

  clear() {
    this._container.innerHTML = '';
  };

  addItem(element) {
    this._container.prepend(element);
  }

  rendererItems() {
    this.clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
