//
// responsive image tag
//

;(function(document, window) {
  console.log('responsive images hey~')

  var images = document.getElementsByTagName('img')
    , src, i

  for (i = 0; i < images.length; i++) {
    src = images[i].getAttribute('data-responsive-image-tag')
    images[i].src = src
  }

  function viewportWidth() {
    // innerWidth for modern browsers, clientWidth for IE
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  }

  function isRetina() {
    return window.devicePixelRatio > 1
  }

})(document, window);
