document.addEventListener('mousemove', function(event) {
    const floatingElement = document.querySelector('.coffee');
    const floatingElement2 = document.querySelector('.teacup');
    
    const mouseX = event.clientX; // 滑鼠的 X 座標
    const mouseY = event.clientY; // 滑鼠的 Y 座標
    
    const offsetX = mouseX - window.innerWidth / 2;
    const offsetY = mouseY - window.innerHeight / 2;
  
    // 計算浮動效果的強度，可以根據需要調整數值
    const moveX = offsetX / 20;
    const moveY = offsetY / 20;
    const moveX2 = offsetX / 80;
    const moveY2 = offsetY / 180;
  
    // 為元素設置新的 transform 屬性，實現浮動效果
    floatingElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    floatingElement2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
  });
