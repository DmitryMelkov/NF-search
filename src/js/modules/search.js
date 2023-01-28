export const search = () => {
  const logo = document.querySelector('.logo-js');
  const burger = document.querySelector('.burger-js');

  const searchItem = document.querySelector('.search__item');
  const searchOpen = document.querySelector('.search-open');
  const searchBack = document.querySelector('.search-back');

  const searchInput = document.querySelector('.search-input');
  const searchClose = document.querySelector('.search-close');
  const searchEnter = document.querySelector('.search-enter');

  searchOpen.addEventListener('click', (e) => {
    e.preventDefault();
    searchOpen.classList.add('active');
    searchItem.classList.add('active');
    searchBack.classList.add('active');
    logo.classList.add('active');
    burger.classList.add('active');
  });

  searchBack.addEventListener('click', (e) => {
    e.preventDefault();
    searchOpen.classList.remove('active');
    searchItem.classList.remove('active');
    searchBack.classList.remove('active');
    logo.classList.remove('active');
    burger.classList.remove('active');
    searchInput.value = '';
  });

  searchInput.addEventListener('input', (e) => {
    e.preventDefault();
    if (searchInput.value !== '') {
      searchClose.classList.add('active');
      searchEnter.classList.add('active');
    } else {
      searchClose.classList.remove('active');
      searchEnter.classList.remove('active');
    }
  });

  searchClose.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = '';
    searchClose.classList.remove('active');
    searchEnter.classList.remove('active');
  });

  searchEnter.addEventListener('click', (e) => {
    e.preventDefault();

    if (searchInput.value === '') {
      searchEnter.setAttribute('disabled', true);
      console.log('пустой инпут');
    } else {
      const inputValue = searchInput.value;
      console.log('Значение инпута: ' + inputValue);
    }
  });

  searchEnter.disabled = true;
  searchInput.addEventListener('keyup', function () {
    searchEnter.disabled = searchInput.value === '';
  });

};
