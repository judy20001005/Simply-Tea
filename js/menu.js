// JavaScript: 分類切換功能
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const menus = document.querySelectorAll('.itemlist');
  const classnote = document.querySelectorAll('.classnote');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 移除所有按鈕的 active 樣式
      tabs.forEach(t => t.classList.remove('active'));

      // 添加 active 樣式到當前按鈕
      tab.classList.add('active');

      // 顯示對應分類內容
      const category = tab.getAttribute('data-category');
      menus.forEach(menu => {
        if (menu.id === category) {
          menu.classList.add('active');
        } else {
          menu.classList.remove('active');
        }
      });

    });
  });
});