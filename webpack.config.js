module.exports = {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  entry: {
    home: __dirname + '/src/home.js',
    news: __dirname + '/src/news.js',
    newsDetail: __dirname + '/src/newsDetail.js',
    discography: __dirname + '/src/discography.js',
    discographyDetail: __dirname + '/src/discographyDetail.js',
    goods: __dirname + '/src/goods.js',
    picturePost: __dirname + '/src/picturePost.js',
    contact: __dirname + '/src/contact.js'
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
