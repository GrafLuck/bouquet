function createPopupTemplate(state) {
  const { isLoading } = state;
  return (`
    <section class="popup-deferred" style="display:block;">
      <div class="popup-deferred__wrapper">
        <section class="hero hero--popup ${isLoading ? 'is-loading' : ''}">
          <div class="hero__wrapper">
            <div class="hero__background">
              <picture>
                <source type="image/webp" srcset="img/content/hero-back-popup.webp, img/content/hero-back-popup@2x.webp 2x"><img src="img/content/hero-back-popup.jpg" srcset="img/content/hero-back-popup@2x.jpg 2x" width="1770" height="601" alt="фоновая картинка">
              </picture>
            </div>
            <div class="hero__content">
              <h2 class="title title--h1">Вас<br>заинтересовали</h2>
              <button class="btn-close btn-close--dark hero__popupclose" type="button" aria-label="Закрыть">
                <svg width="56" height="54" aria-hidden="true">
                  <use xlink:href="#icon-union"></use>
                </svg>
              </button>
              <div class="btn-close btn-close--dark hero__loader">
                <svg class="hero__loader-icon" width="56" height="56" aria-hidden="true">
                  <use xlink:href="#icon-loader"></use>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <div class="popup-deferred__container">
          <a class="btn btn--with-icon popup-deferred__btn btn--light" href="#">в&nbsp;каталог
            <svg width="61" height="24" aria-hidden="true">
              <use xlink:href="#icon-arrow"></use>
            </svg>
          </a>
          <ul class="popup-deferred__catalog">

          </ul>
          <div class="popup-deferred__btn-container">

          </div>
          <div class="popup-deferred__sum">
            <p class="text text--total">Итого вы выбрали:</p>
          </div>
        </div>
      </div>
    </section>
  `);
}

export { createPopupTemplate };
