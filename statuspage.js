// Loads the Bonfire Campus Statuspage embed widget on every docs page.
(function () {
  if (document.querySelector('script[src="https://bonfirecampus.statuspage.io/embed/script.js"]')) return;
  var script = document.createElement('script');
  script.src = 'https://bonfirecampus.statuspage.io/embed/script.js';
  script.async = true;
  document.head.appendChild(script);
})();
