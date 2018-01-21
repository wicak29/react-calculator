const path = require('path'); 

const config = {
  entry: path.join(__dirname, '/client/index.js'), // Abosolute path to our entry file
  output: { // our output configuration
    path: path.join(__dirname, './public/'), // output path (directory/folder)
    filename: 'bundle.js' // output bundled file name
  },
  module: { // define our loaders here
    rules: [ // array of rules to handle different file types
      {
        test: /\.(js|jsx)$/, // check for .js and .jsx files (uses Regex)
        loader: 'babel-loader' // use these loaders for .js and .jsx files found
      }
    ]
  }
};


module.exports = config;