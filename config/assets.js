var assets = {
  favicon: '/favicon.ico',
  js: [
    '/js/lib/json2.js',
    '/js/lib/jquery-1.7.2.min.js',
    '/js/lib/underscore-min.js',
    '/js/lib/backbone.js',
    '/js/lib/swfobject.js',
    '/js/lib/moment-1.5.0.js',
    '/js/lib/less-1.3.0.min.js',
    '/js/lib/jade.min.js',
    '/js/lib/bootstrap.js',
    '/js/boot.js',
    '/js/mixins.js',
    '/js/error.js',
    '/js/modal.js',

    '/js/user.js',
    '/js/session.js',
    '/js/lastfm.js',
    '/js/search.js',
    '/js/playlist.js',
    '/js/radio.js',
    '/js/shuffle.js',
    '/js/artist.js',
    '/js/album.js',
    '/js/track.js',
    '/js/tag.js',
    '/js/meow.js',
    '/js/welcome.js',

    '/js/video.js',
    '/js/keys.js',
    '/js/share.js',
    '/js/alert.js',
    '/js/application.js'
  ],
  less: [ '/less/bootstrap/bootstrap.less' ],
  css: []
}

exports.development = assets
exports.test = assets
exports.staging = exports.production = {
  favicon: 'http://static1.jukesy.com/favicon.ico',
  js: [ 'http://static1.jukesy.com/jukesy.min.js' ],
  css: [ 'http://static2.jukesy.com/jukesy.css' ],
  less: []
}

