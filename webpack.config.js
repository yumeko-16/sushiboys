module.exports = {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  entry: {
    home: __dirname + '/src/js/home.js',
    news: __dirname + '/src/js/news.js',
    newsDetail: __dirname + '/src/js/newsDetail.js',
    discography: __dirname + '/src/js/discography.js',
    discographyDetail: __dirname + '/src/js/discographyDetail.js',
    goods: __dirname + '/src/js/goods.js',
    picturePost: __dirname + '/src/js/picturePost.js',
    contact: __dirname + '/src/js/contact.js'
  },
  output: {
    path: __dirname + '/dist/js',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js']
  }
};
