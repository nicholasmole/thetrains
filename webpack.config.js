var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./drupal_base/web/themes/{custom/testTheme/src/js/index.js}",
	cache: false,
  output: {
    path:  path.resolve(__dirname,"drupal_base/web/themes/{custom/testTheme/js/}"),
    filename: "main.js",
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
				use: ExtractTextPlugin.extract({
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
		new ExtractTextPlugin({
			filename: '../css/{theme.style.css}'
		})
	]
};