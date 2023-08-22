import { FiltersReason, FiltersColor } from '../const.js';

function createFiltersTemplate() {
  return (`
    <div>
      ${createReasonFilter()}
      ${createColorFilter()}
    </div>
  `);
}

function createReasonFilterItem(filter) {
  const { id, type, text, checked } = filter;
  return (`
    <div class="filter-field-text filter-reason__form-field--for-${type} filter-reason__form-field">
      <input class="filter-field-text__input filter-reason__form-field--for-${type} filter-reason__form-field" type="radio" id="filter-reason-field-id-${id}" name="reason" value="for-${type}" ${checked ? 'checked' : ''}>
      <label class="filter-field-text__label" for="filter-reason-field-id-${id}"><span class="filter-field-text__text">${text}</span></label>
    </div>
  `);
}

function createReasonFilterList() {
  let reasonFiltersList = '';
  for (const filter of Object.values(FiltersReason)) {
    reasonFiltersList += createReasonFilterItem(filter);
  }
  return reasonFiltersList;
}

function createReasonFilter() {
  return (`
    <section class="filter-reason">
      <div class="container">
        <h2 class="title title--h3 filter-reason__title">Выберите повод для букета</h2>
        <form class="filter-reason__form" action="#" method="post">
          <div class="filter-reason__form-fields">
            ${createReasonFilterList()}
          </div>
          <button class="filter-reason__btn visually-hidden" type="submit" tabindex="-1">применить фильтр</button>
        </form>
      </div>
    </section>
  `);
}

function createColorFilterItem(filter) {
  const { id, type, text, checked } = filter;
  return (`
    <div class="filter-field-img filter-color__form-field">
      <input class="filter-field-img__input filter-color__form-field" type="checkbox" id="filter-colors-field-id-${id}" name="colors" value="color-${type}" ${checked ? 'checked' : ''} data-filter-color="color-${type}">
      <label class="filter-field-img__label" for="filter-colors-field-id-${id}">
        <span class="filter-field-img__img">
          <picture>
            <source type="image/webp" srcset="img/content/filter-${type}.webp, img/content/filter-${type}@2x.webp 2x"><img src="img/content/filter-${type}.png" srcset="img/content/filter-${type}@2x.png 2x" width="130" height="130" alt="${text}">
          </picture>
        </span>
        <span class="filter-field-img__text">${text}</span>
      </label>
    </div>
  `);
}

function createColorFilterList() {
  let colorFiltersList = '';
  for (const filter of Object.values(FiltersColor)) {
    colorFiltersList += createColorFilterItem(filter);
  }
  return colorFiltersList;
}

function createColorFilter() {
  return (`
    <section class="filter-color">
      <div class="container">
        <h2 class="title title--h3 filter-color__title">Выберите основной цвет для букета</h2>
        <form class="filter-color__form" action="#" method="post">
          <div class="filter-color__form-fields" data-filter-color="filter">
            ${createColorFilterList()}
          </div>
          <button class="visually-hidden" type="submit" tabindex="-1">применить фильтр</button>
        </form>
      </div>
    </section>
  `);
}

export { createFiltersTemplate };
