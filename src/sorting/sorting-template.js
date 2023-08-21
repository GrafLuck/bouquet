function createSortingTemplate(state) {
  return (`
    <div class="catalogue__sorting">
      <div class="sorting-price">
        <h3 class="title sorting-price__title">Цена</h3>
        <a class="sorting-price__link sorting-price__link--incr ${state.isIncrease ? 'sorting-price__link--active' : ''}" href="#" aria-label="сортировка по возрастанию цены" id="increase">
          <svg class="sorting-price__icon" width="50" height="46" aria-hidden="true">
            <use xlink:href="#icon-increase-sort"></use>
          </svg>
        </a>
        <a class="sorting-price__link ${!state.isIncrease ? 'sorting-price__link--active' : ''}" href="#" aria-label="сортировка по убыванию цены" id="descending">
          <svg class="sorting-price__icon" width="50" height="46" aria-hidden="true">
            <use xlink:href="#icon-descending-sort"></use>
          </svg>
        </a>
      </div>
    </div>
  `);
}

export { createSortingTemplate };
