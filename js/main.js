const toast = document.getElementById('toast');
const openShare = document.getElementById('openShare');
const closeShare = document.getElementById('closeShare');


function toggleShare() {
  if (toast.style.display === 'none') {
    toast.style.display = 'flex';
  } else {
    toast.style.display = 'none';
  }
};


openShare.addEventListener('click', toggleShare);
closeShare.addEventListener('click', toggleShare);
