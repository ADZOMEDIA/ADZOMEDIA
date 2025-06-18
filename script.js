console.log('Adzo Media responsive website loaded');

function openPopup(src) {
  const popup = document.getElementById('imagePopup');
  const popupImg = document.getElementById('popupImage');
  popupImg.src = src;
  popup.style.display = 'flex';
}

function closePopup() {
  document.getElementById('imagePopup').style.display = 'none';
}
