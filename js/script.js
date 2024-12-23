//導覽列
let ChangeIcon = function(icon){
  icon.classList.toggle('fa-xmark')
}

const header = document.querySelector('.header')
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',() => {
  header.classList.toggle('show-nav');
})
 
 
 // 選擇需要監聽的元素 選單
 const headerDiv = document.querySelector('.header');

 // 監聽滾動事件
 window.addEventListener('scroll', () => {
     // 如果滾動位置大於 300px，顯示 div
     if (window.scrollY > 300) {
        headerDiv.classList.add('show');
     } else {
        headerDiv.classList.remove('show');
     }
 });

 document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const logo = document.querySelector('.logo');

  // 設定預設選擇狀態
  const activePage = localStorage.getItem('activeMenu');
  if (activePage) {
    menuItems.forEach(item => {
      if (item.textContent === activePage) {
        item.classList.add('active');
      }
    });
  }

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // 移除所有按鈕的 'active' 樣式
      menuItems.forEach(i => i.classList.remove('active'));

      // 為點擊的按鈕添加 'active' 樣式
      item.classList.add('active');

      // 保存到 localStorage
      localStorage.setItem('activeMenu', item.textContent);
    });
  });

  // 點擊 Logo 時移除所有 active 樣式並清除 localStorage
  logo.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'));
    localStorage.removeItem('activeMenu');
  });
});

  // 選擇需要監聽的元素 回首頁按鈕
  const backToTopButton = document.querySelector('.scroll-top');

  // 監聽滾動事件
  window.addEventListener('scroll', () => {
      // 如果滾動位置大於 100px，顯示 div
      if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
  });


 // 初始化 Swiper
var swiper = new Swiper('.swiper-1', {
      loop: true,
      autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });  

    var swiper = new Swiper(".swiper-2", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
        },
        1280: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
        }
      }
    });

    var swiper = new Swiper(".swiper-3", {
      loop: true,
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });