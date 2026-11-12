const toast = document.getElementById('toast');
const openShare = document.getElementById('openShare');
const closeShare = document.getElementById('closeShare');

/* 
Detects viewport width changes and add/ remove classes
based on the value
*/
function handleViewportChange() {
  const viewportWidth = window.innerWidth;
  
  if ((viewportWidth > 767) && (toast.style.display === 'flex')) {
    // Hides share toast toggle button 
    closeShare.style.display = 'none';
    // Changes profile button to dark
    openShare.classList.add('dark-button');
  } else {
    // Shows shared toast toggle button
    closeShare.style.display = 'flex';
    // Changes profile button to light
    openShare.classList.remove('dark-button');
  }
};

// Toggles whether the toast is shown or hidden
function toggleShare() {
  if (toast.style.display === 'none') {
    toast.style.display = 'flex';
  } else {
    toast.style.display = 'none';
  }
};

window.addEventListener('resize', handleViewportChange);

openShare.addEventListener('click', toggleShare);
closeShare.addEventListener('click', toggleShare);
