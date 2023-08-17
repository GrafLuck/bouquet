function createHeaderCountTemplate({count, price}) {
  return (`
    <div class="header-count">
      <button class="header-count__btn" type="button">
        <svg width="60" height="47" aria-hidden="true">
          <use xlink:href="#icon-heart-header"></use>
        </svg><span class="visually-hidden">закрыть</span>
      </button>
      <div class="header-count__count">
        <p class="text text--size-20 header-count__counter">${count}</p>
      </div>
      <div class="header-count__block">
        <p class="text text--size-20 header-count__text">сумма</p><b class="price price--size-min header-count__price">${price}<span>Р</span></b>
      </div>
    </div>
  `);
}

export {createHeaderCountTemplate};

