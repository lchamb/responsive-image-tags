//
// responsive image tag
//

;(function(document, window) {
  var options = {
    'small'   : 480,
    'medium'  : 720,
    'large'   : 1440
  }

  var Retina = function() {}

  Retina.init = function(options) {
    var images        = document.getElementsByTagName('img')
      , isRetina      = window.devicePixelRatio > 1
        // innerWidth for modern browsers, clientWidth for IE
      , viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      , src, i

    for (i = 0; i < images.length; i++) {
      var image  = images[i]
        , src    = image.getAttribute('data-responsive-image-tag')
        , suffix = ''

      if (!src) return false

      if (viewportWidth <= options.small)
        suffix = '_small'

      if (viewportWidth >= options.large)
        suffix = '_large'

      if (isRetina == true)
        suffix += '@2x'

      image.src = src.replace(/\.\w+$/, function(match) { return suffix + match })
    }
  }

  Retina.init(options)

})(document, window);
