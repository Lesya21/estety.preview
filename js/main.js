const DISCOUNT_POPUP_SHOW_DELAY = 10000; //милисекунды
const DISCOUNT_POPUP_COOKIE_NAME = 'isDiscontPopupShow';
const DISCOUNT_POPUP_COOKIE_EXPIRE = 45000; //секунды

const setCookie = (name, value, expire) => {
   
   document.cookie = `${name}=${value}; max-age=${expire}`
}

const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const showDiscountPopup = () => {
   const isPopupShown = getCookie(DISCOUNT_POPUP_COOKIE_NAME)
   if (!isPopupShown) {
      setTimeout(() => {
         document.querySelector('.popup-back--discount').classList.add('open');
         document.querySelector('.popup-content--discount').classList.add('open');
         setCookie(DISCOUNT_POPUP_COOKIE_NAME, true, DISCOUNT_POPUP_COOKIE_EXPIRE)
      }, DISCOUNT_POPUP_SHOW_DELAY)
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   $('.main-slider').slick({
         arrows: false,
         autoplay: true
   });

   $('.price-slider').slick({
   		arrows: true
   });

  showDiscountPopup()

   document.querySelector('.banner-block--sugar').addEventListener('click', () => {
   		document.querySelector('.popup-back--sugar').classList.add('open');
   		document.querySelector('.popup-content--sugar').classList.add('open');
   });

  document.querySelector('.banner-block--laser').addEventListener('click', () => {
   		document.querySelector('.popup-back--laser').classList.add('open');
   		document.querySelector('.popup-content--laser').classList.add('open');

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


   document.querySelectorAll('.popup-back').forEach(item => {
      item.addEventListener('click', ({target}) => {
         const popup = target.closest('.popup-back')
         if (popup && popup.classList.contains('open')) {
            popup.classList.remove('open');
            popup.querySelector('.popup-content').classList.remove('open')
         }
      })
   })
 
});