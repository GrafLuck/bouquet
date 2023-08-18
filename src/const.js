const AUTHORIZATION = 'Basic dPy4sfS45wcl1sh2I';
const END_POINT = 'https://grading.objects.pages.academy';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const FiltersReason = {
  ALL: {
    id: '0',
    type: 'all',
    text: 'Для всех',
    checked: true,
  },
  BIRTHDAY: {
    id: '1',
    type: 'birthday',
    text: 'Имениннику',
    checked: false,
  },
  BRIDE: {
    id: '2',
    type: 'bride',
    text: 'Невесте',
    checked: false,
  },
  MOTHER: {
    id: '3',
    type: 'mother',
    text: 'Маме',
    checked: false,
  },
  COLLEAGUE: {
    id: '4',
    type: 'colleague',
    text: 'Коллеге',
    checked: false,
  },
  DARLING: {
    id: '5',
    type: 'darling',
    text: 'Любимой',
    checked: false,
  }
}

const FiltersColor = {
  ALL: {
    id: '0',
    type: 'all',
    text: 'все цвета',
    checked: true,
  },
  RED: {
    id: '1',
    type: 'red',
    text: 'красный',
    checked: false,
  },
  WHITE: {
    id: '2',
    type: 'white',
    text: 'белый',
    checked: false,
  },
  LILAC: {
    id: '3',
    type: 'lilac',
    text: 'сиреневый',
    checked: false,
  },
  YELLOW: {
    id: '4',
    type: 'yellow',
    text: 'жёлтый',
    checked: false,
  },
  PINK: {
    id: '5',
    type: 'pink',
    text: 'розовый',
    checked: false,
  },
}

export {
  AUTHORIZATION,
  END_POINT,
  Method,
  FiltersReason,
  FiltersColor
};
