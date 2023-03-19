const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
	entry: {
		index: './src/scripts/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new MiniCssExtractPlugin(),
		// new CopyPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve(__dirname, 'public/favicon.ico'),
		// 			to: path.resolve(__dirname, 'public')
		// 		}
		// 	]
		// })
	],
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpe?g|png|webp|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'static/assets/image/[name][ext]'
				}
			},
			{
				test: /\.svg$/i,
				type: 'asset/resource',
				generator: {
					filename: 'static/assets/icons/[name][ext]'
				}
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]]
					}
				}
			}
		]
	}
}