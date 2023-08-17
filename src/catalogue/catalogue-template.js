function createCatalogueTemplate() {
  return (`
    <div class="catalogue" data-items="catalogue">
      <div class="container">
        <div class="catalogue__header">
          <h2 class="title title--h3 catalogue__title">Каталог</h2>
        </div>
        <ul class="catalogue__list">
        </ul>
        <div class="catalogue__btn-wrap">
        </div>
      </div>
    </div>
  `);
}

export { createCatalogueTemplate };
