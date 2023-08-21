function createCardPopupTemplate(card) {
  const { title, description, price, previewImage, count, isLoading } = card;
  return (`
    <li class="popup-deferred__item">
      <div class="deferred-card ${isLoading ? 'is-loading' : ''}">
        <div class="deferred-card__img">
          <picture>
            <img src="${previewImage}" width="233" height="393" alt="букет">
          </picture>
        </div>
        <div class="deferred-card__content">
          <h2 class="title title--h2">${title}</h2>
          <p class="text text--size-40">${description}</p>
        </div>
        <div class="deferred-card__count">
          <button class="btn-calculate" type="button" id="btn-calculate-minus" ${count > 0 ? '' : 'disabled'}>
            <svg width="30" height="27" aria-hidden="true">
              <use xlink:href="#icon-minus"></use>
            </svg>
          </button><span>${count}</span>
          <button class="btn-calculate" type="button" id="btn-calculate-plus">
            <svg width="30" height="28" aria-hidden="true">
              <use xlink:href="#icon-cross"></use>
            </svg>
          </button>
        </div>
        <div class="deferred-card__price"><b class="price price--size-middle-p">${price * count}<span>Р</span></b>
        </div>
        <button class="btn-close deferred-card__close-btn" type="button">
          <svg width="55" height="56" aria-hidden="true">
            <use xlink:href="#icon-close-big"></use>
          </svg>
        </button>
        <svg class="deferred-card__close-btn deferred-card__loader" width="56" height="56" aria-hidden="false">
          <use xlink:href="#icon-loader"></use>
        </svg>
      </div>
    </li>
  `);
}

export { createCardPopupTemplate };
