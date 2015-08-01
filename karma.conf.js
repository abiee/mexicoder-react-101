// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jspm', 'mocha', 'chai-sinon', 'jquery-chai', 'fixture'],

    // list of files / patterns to load in the browser
    //files: [
    //  'test/spec/fixtures/**/*',
    //  'test/index.js'
    //],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocesso
    preprocessors: {
      'test/spec/fixtures/**/*.html': ['html2js'],
      'test/spec/fixtures/**/*.json': ['html2js'],
      'app/scripts/**/*.jsx': ['react']
	  },

    // Enable ES6 support on React components
    reactPreprocessor: {
      es6module: true
    },

    // Load script through jspm
    jspm: {
      loadFiles: ['test/index.js', 'test/spec/**/*.js', 'test/spec/fixtures/**/*'],
      serveFiles: ['app/scripts/**/*.js', 'app/scripts/**/*.jsx']
    },

    // report on console and growl if available
    //
    // More info about growl notifications on
    // http://mattn.github.io/growl-for-linux/
    // http://growl.info/
    reporters: ['spec', 'growl'],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // Which plugins to enable
    plugins: [
      'karma-jspm',
      'karma-react-preprocessor',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-jquery-chai',
      'karma-fixture',
      'karma-html2js-preprocessor',
      'karma-spec-reporter',
      'karma-growl',
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs2-launcher'
    ],

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
