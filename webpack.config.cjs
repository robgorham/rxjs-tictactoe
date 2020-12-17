const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: path.resolve(__dirname, 'src') + '/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  
  },

  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
      sourceMapFilename: "[name].js.map"
  },
  devtool: 'inline-source-map'
};
