const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './app.ts',
		vendor: './vendor.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor']
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core/,
			'./app',
			{}
		),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CopyWebpackPlugin([
			{from: './img', to: 'img'},
			{from: './templates', to: 'templates'},
			{from: './styles', to: 'styles'},
			{from: 'node_modules/materialize-css/dist/css/materialize.min.css', to: 'styles'},
			{from: 'node_modules/font-awesome/css/font-awesome.min.css', to: 'styles'},
			{from: 'node_modules/font-awesome/fonts', to: 'fonts'},
			{from: 'node_modules/normalize.css/normalize.css', to: 'styles'}
		])
	],
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader',
				options: {configFileName: 'tsconfig.json'}
			}/*,
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'raw-loader'
			}*/
		]
	}
};
