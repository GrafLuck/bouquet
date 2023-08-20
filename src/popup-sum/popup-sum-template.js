function createPopupSumTemplate(count, price) {
  return (`
    <div class="popup-deferred__block-wrap">
      <div class="popup-deferred__block">
        <p class="text text--total">Букеты</p><span class="popup-deferred__count" data-atribut="count-defer">${count}</span>
      </div>
      <div class="popup-deferred__block">
        <p class="text text--total">Сумма</p><b class="price price--size-middle-p">${price}<span>Р</span></b>
      </div>
    </div>
  `);
}

export { createPopupSumTemplate };

