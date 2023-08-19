function createCatalogueCardTemplate(card) {
  const { title, description, price, previewImage, isActive } = card;
  return (`
    <li class="catalogue__item">
      <div class="item-card">
        <button class="item-card__btn" type="button" data-open-modal="product-card" aria-label="посмотреть товар"></button>
        <p class="item-card__label">имениннику</p>
        <div class="item-card__img-wrap">
          <button class="button-heart item-card__to-fav-btn" type="button" aria-label="добавить в избранное">
            <svg class="button-heart__icon" width="75" height="75" aria-hidden="true" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37.5" cy="37.5" r="37.5" fill="#FFFEFC"/>
            <path class="button-heart__stroke" fill-rule="evenodd" clip-rule="evenodd" d="M45.5086 15.592C48.5097 14.7899 50.5293 14.8165 53.5105 15.589C56.1792 16.2806 57.9393 17.0186 60.1181 19.0763C61.4314 20.3166 62.3753 21.5491 63.0827 22.968C63.781 24.3686 64.2088 25.8715 64.5741 27.5778C65.2032 30.5104 65.073 32.3859 64.5884 35.1804C64.1922 37.466 63.7212 38.7687 62.811 40.7877C61.2798 44.1841 59.605 45.9651 57.4989 48.2047C57.205 48.5172 56.9021 48.8393 56.5907 49.1753C54.545 51.3823 52.8875 52.6864 50.9967 54.174C50.3295 54.6989 49.6332 55.2468 48.8806 55.8652C46.9503 57.4512 44.1992 59.4256 41.9611 60.9846C40.8358 61.7685 39.8289 62.4552 39.1031 62.9459C38.7402 63.1914 38.4473 63.3881 38.2448 63.5236C38.1435 63.5913 38.0648 63.6438 38.0112 63.6795L37.9499 63.7203L37.9341 63.7308L37.9299 63.7336C37.9299 63.7336 37.9284 63.7346 37.8264 63.5569L37.9283 63.7346C37.6071 63.9477 37.2448 64.0285 36.8963 63.9912C36.5513 64.0282 36.1927 63.9493 35.8736 63.7408L35.9735 63.564C35.8736 63.7409 35.8736 63.7408 35.8736 63.7408L35.872 63.7398L35.8679 63.7371L35.8524 63.727L35.7928 63.6879C35.7406 63.6536 35.664 63.6033 35.5655 63.5382C35.3685 63.4082 35.0834 63.2195 34.73 62.9835C34.0232 62.5117 33.0416 61.8504 31.9416 61.0918C29.7539 59.5832 27.0525 57.6589 25.1195 56.0706C24.3669 55.4522 23.6708 54.9045 23.0036 54.3796C21.1128 52.892 19.455 51.5877 17.4093 49.3807C17.0977 49.0445 16.7954 48.723 16.5014 48.4103C14.3953 46.1707 12.7203 44.3894 11.189 40.9931C10.2788 38.974 9.80789 37.6714 9.41147 35.3857C8.92682 32.5913 8.79709 30.7158 9.42572 27.7832C9.79148 26.077 10.219 24.574 10.9173 23.1734C11.6248 21.7545 12.5687 20.522 13.882 19.2816C16.0608 17.224 17.8209 16.486 20.4896 15.7944C23.4707 15.0219 25.4904 14.9953 28.4914 15.7974C28.8373 15.8899 29.1811 15.9676 29.5256 16.0454C30.9468 16.3666 32.3787 16.6901 34.0003 18.0598C34.794 18.7302 36.098 19.9011 37.2495 20.9465C37.3862 20.7981 37.5525 20.6204 37.7437 20.4217C38.3009 19.8429 39.0826 19.0726 39.9662 18.3262C41.8714 16.7171 43.3346 16.1731 45.5086 15.592ZM39.1474 23.9538C39.0154 24.1192 38.8537 24.322 38.6556 24.5704L37.5776 25.922L37.5749 25.9195L37.5664 25.9116L37.5327 25.8806L37.4029 25.761C37.2901 25.6572 37.127 25.5072 36.926 25.3227C36.524 24.9538 35.971 24.4476 35.3669 23.8981C34.1498 22.7913 32.7533 21.5348 31.9554 20.8609C30.9813 20.0382 30.3781 19.8979 29.1292 19.6076C28.7283 19.5143 28.2607 19.4056 27.6929 19.2538C25.2335 18.5965 23.7544 18.6118 21.2651 19.2569C18.9297 19.8621 17.7177 20.3987 16.0666 21.9579C14.9954 22.9696 14.3235 23.8775 13.8353 24.8566C13.338 25.8541 12.9901 27.0069 12.6522 28.5834C12.1577 30.8905 12.2347 32.2432 12.6665 34.7326C12.9945 36.6241 13.348 37.6196 14.1683 39.4391C15.4412 42.2622 16.7238 43.6302 18.82 45.8657C18.8218 45.8677 18.8237 45.8697 18.8255 45.8716C19.1182 46.1838 19.4275 46.5137 19.7541 46.8661C21.6055 48.8634 23.0016 49.962 24.8182 51.3915L24.8199 51.3929C25.5125 51.9379 26.2662 52.531 27.1295 53.2403C28.9464 54.7332 31.5494 56.5907 33.7287 58.0936C34.812 58.8406 35.7795 59.4925 36.476 59.9574C36.6279 60.0589 36.7669 60.1513 36.8914 60.234C37.025 60.144 37.1755 60.0426 37.3408 59.9308C38.0572 59.4463 39.0512 58.7685 40.1612 57.9953C42.3938 56.4401 45.0508 54.5301 46.8705 53.035C47.7339 52.3256 48.4876 51.7324 49.1802 51.1874L49.1818 51.1862C50.9984 49.7568 52.3946 48.658 54.2459 46.6607C54.5748 46.3058 54.8855 45.9745 55.1801 45.6604C57.2762 43.4248 58.5589 42.0568 59.8317 39.2337C60.652 37.4142 61.0055 36.4188 61.3336 34.5272C61.7654 32.0378 61.8424 30.6851 61.3478 28.378C61.0099 26.8015 60.662 25.6487 60.1647 24.6512C59.6765 23.6721 59.0046 22.7642 57.9334 21.7526C56.2823 20.1933 55.0704 19.6567 52.735 19.0515C50.9584 18.5911 49.6964 18.4515 48.2254 18.6482C47.6352 18.7271 47.0114 18.8602 46.3071 19.0484C44.3727 19.5655 43.4076 19.9479 42.0112 21.1274C41.244 21.7754 40.5499 22.458 40.044 22.9835C39.7924 23.2448 39.5907 23.4639 39.4534 23.6158C39.3848 23.6917 39.3325 23.7507 39.2983 23.7895C39.2812 23.8089 39.2687 23.8233 39.2609 23.8322L39.2528 23.8414C39.2192 23.8806 39.1835 23.9187 39.1474 23.9538Z" fill=""/>
            <path class="button-heart__body ${isActive ? 'button-heart__body-active' : ''}" d="M39.1474 23.9538L38.6556 24.5704L37.5776 25.922L37.5749 25.9195L37.5664 25.9116L37.5327 25.8806L37.4029 25.761C37.2901 25.6572 37.127 25.5072 36.926 25.3227C36.524 24.9538 35.971 24.4476 35.3669 23.8981C34.1498 22.7913 32.7533 21.5348 31.9554 20.8609C30.9813 20.0382 30.3781 19.8979 29.1292 19.6076C28.7283 19.5143 28.2607 19.4056 27.6929 19.2538C25.2335 18.5965 23.7544 18.6118 21.2651 19.2569C18.9297 19.8621 17.7177 20.3987 16.0666 21.9579C14.9954 22.9696 14.3235 23.8775 13.8353 24.8566C13.338 25.8541 12.9901 27.0069 12.6522 28.5834C12.1577 30.8905 12.2347 32.2432 12.6665 34.7326C12.9945 36.6241 13.348 37.6196 14.1683 39.4391C15.4412 42.2622 16.7238 43.6302 18.82 45.8657L18.8255 45.8716C19.1182 46.1838 19.4275 46.5137 19.7541 46.8661C21.6055 48.8634 23.0016 49.962 24.8182 51.3915L24.8199 51.3929C25.5125 51.9379 26.2662 52.531 27.1295 53.2403C28.9464 54.7332 31.5494 56.5907 33.7287 58.0936C34.812 58.8406 35.7795 59.4925 36.476 59.9574C36.6279 60.0589 36.7669 60.1513 36.8914 60.234C37.025 60.144 37.1755 60.0426 37.3408 59.9308C38.0572 59.4463 39.0512 58.7685 40.1612 57.9953C42.3938 56.4401 45.0508 54.5301 46.8705 53.035C47.7339 52.3256 48.4876 51.7324 49.1802 51.1874L49.1818 51.1862C50.9984 49.7568 52.3946 48.658 54.2459 46.6607C54.5748 46.3058 54.8855 45.9745 55.1801 45.6604C57.2762 43.4248 58.5589 42.0568 59.8317 39.2337C60.652 37.4142 61.0055 36.4188 61.3336 34.5272C61.7654 32.0378 61.8424 30.6851 61.3478 28.378C61.0099 26.8015 60.662 25.6487 60.1647 24.6512C59.6765 23.6721 59.0046 22.7642 57.9334 21.7526C56.2823 20.1933 55.0704 19.6567 52.735 19.0515C50.9584 18.5911 49.6964 18.4515 48.2254 18.6482C47.6352 18.7271 47.0114 18.8602 46.3071 19.0484C44.3727 19.5655 43.4076 19.9479 42.0112 21.1274C41.244 21.7754 40.5499 22.458 40.044 22.9835C39.7924 23.2448 39.5907 23.4639 39.4534 23.6158C39.3848 23.6917 39.3325 23.7507 39.2983 23.7895L39.2609 23.8322L39.2528 23.8414C39.2192 23.8806 39.1835 23.9187 39.1474 23.9538Z" fill=""/>
            </svg>
          </button>
          <picture>
            <img src="${previewImage}" width="244" height="412" alt="${description}">
          </picture>
        </div>
        <div class="item-card__desc-wrap">
          <h3 class="title title--h4 item-card__title">${title}</h3>
          <div class="item-card__price-wrap"><b class="item-card__formatted-price">${price}</b><span class="item-card__currency">р</span></div>
        </div>
        <p class="text text--size-20 item-card__desc">${description}</p>
      </div>
    </li>
  `);
}

function createCataloguePopupTemplate(card) {
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

export { createCatalogueCardTemplate, createCataloguePopupTemplate };

