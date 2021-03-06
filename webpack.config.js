module.exports = {
  entry: `${__dirname}/dist/App.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist/src`,
  },
};
