const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
let currentPhotoIndex = 0;
const heroElement = document.querySelector('.hero');

setInterval(() => {
  // フェードアウト開始
  heroElement.style.opacity = '0';
  
  // 背景画像を変更
  setTimeout(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    const nextPhoto = photos[currentPhotoIndex];
    heroElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${nextPhoto}')`;
    
    // フェードイン
    heroElement.style.opacity = '1';
  }, 500);
}, 5000);
