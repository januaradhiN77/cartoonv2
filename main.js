const allSkeleton = document.querySelectorAll('.skeleton');

window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
    });
  }, 2000);
});

