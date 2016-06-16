var path = require('path');
var webpack = require("webpack");
module.exports = {
  entry:
  {
    app:
    ['./controller/mainCtl.js',
      './controller/account.js',
      './controller/mainMgmt.js'
    ],
  },
  output: {
    chunkFilename: './appbundle/[name].js',
    filename: './appbundle/[name].bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: path.join(__dirname, 'controller'),
        query: {
          presets: 'es2015',
        },
      },
      {
        // I want to uglify with mangling only app files, not thirdparty libs
        test: /appbundle\/app\/.*\.js$/,
        exclude: /Scripts/, // excluding .spec files
        loader: "uglify"
      },
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
  //resolve jquery
  resolve: {
    modulesDirectories: ["./global"],
    alias: {
      jquery: "../Scripts/jquery-1.10.2.min",
      jqueryform: "../Scripts/jquery.unobtrusive-ajax.min",
      jqueryval: "../Scripts/jquery.validate",
      jqueryvalunobtrusive: "../Scripts/jquery.validate.unobtrusive.min",
      jquerysuperSlide: "../Scripts/jquery.SuperSlide.2.1.2",
      jquerytmpl: "../Scripts/plugins/jquerytmpl/jquery.tmpl.min",
      jqueryihgcalendar: '../Scripts/plugins/lhgcalendar/lhgcore.lhgcalendar.min',
      jqueryihgdialog: '../Scripts/plugins/lhgcalendar/lhgcore.lhgdialog.min',
      jqueryui: '../Scripts/plugins/jqueryui/jquery-ui.min',
      respondscreen: "../Scripts/respond-screen",
      jquerycrsdomain: '../Scripts/plugins/jquerycrsdomain/jquery.xdomainrequest.min',
      jqueryhisotry: '../Scripts/plugins/jqueryhistory/jquery.history',
      jquerynotify: '../Scripts/plugins/jquerynotify/notify',
      jquerynicescroll: '../Scripts/plugins/jquerynicescroll/jquery.nicescroll',
      socketio: '../Scripts/plugins/socket.io/socket.io-1.4.5',
      domReady: '../Scripts/plugins/domReady/domReady',
    },
    module: {
      loaders: [
        { test: /jquery/, loader: 'expose?$!expose?jQuery!jquery' },
        { test: /jqueryui/, loader: 'exports?jqueryui!imports?jQuery' },
        { test: /jqueryform/, loader: 'exports?jqueryform!imports?jquery' },
        { test: /jqueryval/, loader: 'exports?jqueryval!imports?jquery' },
        { test: /jqueryvalunobtrusive/, loader: 'exports?jqueryvalunobtrusive!imports?jquery' },
        { test: /jquerysuperSlide/, loader: 'exports?jquerysuperSlide!imports?jquery' },
        { test: /jqueryvalunobtrusive/, loader: 'exports?jqueryvalunobtrusive!imports?jquery' },
        { test: /jquerytmpl/, loader: 'exports?jquerytmpl!imports?jquery' },
        { test: /jquerycrsdomain/, loader: 'exports?jquerycrsdomain!imports?jquery' },
        { test: /jqueryihgcalendar/, loader: 'exports?jqueryihgcalendar!imports?jquery' },
        { test: /jqueryihgdialog/, loader: 'exports?jqueryihgdialog!imports?jquery' },
        { test: /jquerynicescroll/, loader: 'exports?jquerynicescroll!imports?jquery' },
        { test: /jquerynotify/, loader: 'exports?jquerynotify!imports?jquery' },
        { test: /jqueryhisotry/, loader: 'exports?jqueryhisotry!imports?jquery' },
        { test: /socketio/, loader: 'exports?io!imports:jquery' },
      ]
    }
  },
};
