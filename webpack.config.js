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
      },
      { 
        // check for files ending with  .css (uses Regex)
        test: /\.css$/,
         // use these loaders of .css files. 'css-loader gets run first and is 
         // used to handle the imports of our css files inside our jsx files. 
         // The style loader then mounts our css in to the DOM
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  // set the file extensions we want webpack to resolve
  resolve: {
    extensions: ['.js', '.jsx']
  }
};


module.exports = config;