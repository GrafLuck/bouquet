function createPopupButtonClean({ isClean }) {
  return (`
    <button class="btn btn--with-icon popup-deferred__btn-clean" type="button">${isClean ? 'очищаем...' : 'очистить'}
      <svg width="61" height="24" aria-hidden="true">
        <use xlink:href="#icon-arrow"></use>
      </svg>
    </button>
  `);
}

export { createPopupButtonClean };
