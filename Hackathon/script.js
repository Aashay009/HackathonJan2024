const menuIcon = document.querySelector('.menu-icon');
const buttons = document.querySelector('.buttons');

menuIcon.addEventListener('click', () => {
	buttons.classList.toggle('show');
});
