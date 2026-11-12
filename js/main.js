const toast = document.getElementById('toast');
const openShare = document.getElementById('openShare');
const closeShare = document.getElementById('closeShare');


openShare.addEventListener('click', () => {
  const width = window.innerWidth;

  if (width > 767) {
    closeShare.classList.toggle('hidden');
    openShare.classList.toggle('dark-button');
  }
  toast.classList.toggle('hidden');
  
});

closeShare.addEventListener('click', () => {
  toast.classList.toggle('hidden');
});
