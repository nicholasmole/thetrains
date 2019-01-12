var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const themeCss = new ExtractTextPlugin("../css/theme.css");

module.exports = {
	entry: [
		"./train_site/web/themes/custom/trains/js/src/index.js",
		"./train_site/web/themes/custom/trains/css/scss/theme.scss",
	],
	cache: false,
  output: {
    path:  path.resolve(__dirname,"train_site/web/themes/custom/trains/js"),
    filename: "theme.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
				test: /\.scss|.sass$/,
				use: themeCss.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader" // translates CSS into CommonJS
						},
						{
							loader: "sass-loader" // compiles Stylus to CSS
						}
					]
				})
      }
    ]
	},
	plugins: [		
		themeCss
	]
};