document.addEventListener("DOMContentLoaded", function(event) { 
  $('.price-slider').slick({
   		arrows: true
   });

   document.querySelector('.banner-block--sugar').addEventListener('click', () => {
   		document.querySelector('.popup-back--sugar').classList.add('open');
   		document.querySelector('.popup-content--sugar').classList.add('open');

   		document.querySelector('.popup-back.open').addEventListener('click', () => {
			document.querySelector('.popup-back--sugar').classList.remove('open');
			document.querySelector('.popup-content--sugar').classList.remove('open');
	 	});
   });

  document.querySelector('.banner-block--laser').addEventListener('click', () => {
   		document.querySelector('.popup-back--laser').classList.add('open');
   		document.querySelector('.popup-content--laser').classList.add('open');

   		document.querySelector('.popup-back.open').addEventListener('click', () => {
			document.querySelector('.popup-back--laser').classList.remove('open');
			document.querySelector('.popup-content--laser').classList.remove('open');
	 	});
   });

   document.querySelectorAll('.about-more__item-title').forEach(item => {
   		item.addEventListener('click', () => {
   			item.closest('.about-more__item').querySelector('.about-more__item-text').classList.toggle('open');
   			item.closest('.about-more__item').classList.toggle('open');
   		});
   });

   document.querySelector('.header-burger').addEventListener('click', () => {
   		document.querySelector('.header-menu').classList.add('open');
   		document.querySelector('.header-burger-close').classList.add('visible');

   		 document.querySelectorAll('.header-menu.open li').forEach(item => {
	   		item.addEventListener('click', (e) => {
	   			e.preventDefault;
	   			document.querySelector('.header-menu').classList.remove('open');
	   			document.querySelector('.header-burger-close').classList.remove('visible');
	   		})
	   })
   });

   document.querySelector('.header-burger-close').addEventListener('click', () => {
   		document.querySelector('.header-menu').classList.remove('open');
   		document.querySelector('.header-burger-close').classList.remove('visible');
   });
 
});