const closeBtn = document.querySelector('.close');
const hambuger = document.querySelector('.menuIcon');
const btnContainer = document.querySelector('.mobile');
const menuItemList = document.querySelector('.menu-list');
const item = document.querySelectorAll('.navbar-menu-item');

function toggleHamburger() {
  if (menuItemList.classList.contains('showMenu')) {
    menuItemList.classList.remove('showMenu');
    closeBtn.style.display = 'none';
    hambuger.style.display = 'block';
  } else {
    menuItemList.classList.add('showMenu');
    closeBtn.style.display = 'block';
    hambuger.style.display = 'none';
  }
}

btnContainer.addEventListener('click', toggleHamburger);

item.forEach((item) => {
  item.addEventListener('click', toggleHamburger);
});
