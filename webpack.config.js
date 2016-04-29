module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/public/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ['babel-preset-react', 'babel-preset-es2015'].map(require.resolve)
        }
      }
    ]
  }
}
