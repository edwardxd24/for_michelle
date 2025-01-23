
const heartLink = document.getElementById('heart-link');

heartLink.addEventListener('click', function (event) {
  event.preventDefault();

  document.body.classList.add('page-exit');

  setTimeout(() => {
    window.location.href = heartLink.href;
  }, 800);
});
