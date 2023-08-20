function createCatalogueCardModalTemplate(card) {
  const { title, description, price, authorPhoto, isActive, images } = card;
  return (`
    <div>
      <div>
        <div class="image-slider swiper modal-product__slider">
        <div class="image-slides-list swiper-wrapper">
          ${createImages(images, authorPhoto)}
        </div>
        <button class="btn-round btn-round--to-left image-slider__button image-slider__button--prev" type="button">
          <svg width="80" height="85" aria-hidden="true" focusable="false">
            <use xlink:href="#icon-round-button"></use>
          </svg>
        </button>
        <button class="btn-round btn-round--to-right image-slider__button image-slider__button--next" type="button">
          <svg width="80" height="85" aria-hidden="true" focusable="false">
            <use xlink:href="#icon-round-button"></use>
          </svg>
        </button>
      </div>
      <div class="product-description">
        <div class="product-description__header">
          <h3 class="title title--h2">${title}</h3><b class="price price--size-big">${price}<span>Р</span></b>
        </div>
        <p class="text text--size-40">${description}</p>
        <button class="btn btn--outlined btn--full-width product-description__button" type="button" data-focus>${isActive ? 'отложено' : 'отложить'}
        </button>
      </div>
    </div>
  `);
}

function createImages(images, authorPhoto) {
  let slides = '';
  for (const image of images) {
    slides += createImage(image, authorPhoto);
  }
  return slides;
}

function createImage(image, authorPhoto) {
  return (`
    <div class="image-slides-list__item swiper-slide">
      <div class="image-slide">
        <picture>
          <img src="${image}" width="1274" height="1789" alt="">
        </picture>
        <span class="image-author image-slide__author">Автор  фотографии:  ${authorPhoto}</span>
      </div>
    </div>
  `);
}

export { createCatalogueCardModalTemplate };
