const changeClass = (func, elem, className) => {
  switch (func) {
    case 'add':
      return elem.classList.add(className);
    case 'rm':
      return elem.classList.remove(className);
    default:
      console.log('hoverClass: no such function');
      return;
  }
};

const hoverKeeperClass = '.feed-card';
const checkboxClass = '.feed-card__input';
const curCard = elem => elem.closest(hoverKeeperClass);
const changeCardOnHover = (func, elem) => changeClass(func, elem, 'feed-card--hover');

const allHoverTriggers = [
  ...document.querySelectorAll('.feed-card__content'),
  ...document.querySelectorAll('.feed-card__agit-link')
];
const allInputs = document.querySelectorAll(checkboxClass);


allHoverTriggers.forEach((elem) => {
  if(curCard(elem).querySelector(checkboxClass).disabled) {
    return;
  }

  elem.addEventListener('mouseenter', () => {
    changeCardOnHover('add', curCard(elem));
  });

  elem.addEventListener('mouseleave', () => {
    changeCardOnHover('rm', curCard(elem));
  });
});

allInputs.forEach((elem) => {
  elem.addEventListener('change', () => {
    if(elem.checked) {
      changeCardOnHover('rm', curCard(elem));
    } else {
      changeCardOnHover('add', curCard(elem));
    }
  });
});
