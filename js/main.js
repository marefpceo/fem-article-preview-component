const toast = document.getElementById('toast');
const openShare = document.getElementById('openShare');
const closeShare = document.getElementById('closeShare');


openShare.addEventListener('click', () => {
  toast.style.display = 'flex'
});

closeShare.addEventListener('click', () => {
  toast.style.display = 'none';
});
