module.exports = {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  entry: {
    home: __dirname + '/src/assets/js/home.js',
    biography: __dirname + '/src/assets/js/biography.js',
    news: __dirname + '/src/assets/js/news.js',
    newsDetail: __dirname + '/src/assets/js/newsDetail.js',
    discography: __dirname + '/src/assets/js/discography.js',
    discographyDetail: __dirname + '/src/assets/js/discographyDetail.js',
    goods: __dirname + '/src/assets/js/goods.js',
    picturePost: __dirname + '/src/assets/js/picturePost.js',
    contact: __dirname + '/src/assets/js/contact.js',
  },
  output: {
    path: __dirname + '/dist/assets/js',
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
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
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js'],
  },
};
