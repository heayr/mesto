export default class Section {
  constructor({ data, renderer }, cardListSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = cardListSelector;
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
