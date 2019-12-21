const path = require('path');

const srcPath = path.resolve(__dirname, 'client');
const publicPath = path.resolve(__dirname);

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './client',
  output: {
    path: publicPath
  },
  module: {
    // parserOptions: {
    //   ecmaVersion: 6,
    //   sourceType: module,
    //   ecmaFeatures: {
    //     jsx: true
    //   }
    // },
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: publicPath,
    historyApiFallback: true,
    watchContentBase: true,
    stats: 'minimal',
    proxy: {
      '/api': {
        target: 'http://localhost',
        headers: {
          Host: 'headwireInterview.localhost'
        }
      }
    }
  }
};
