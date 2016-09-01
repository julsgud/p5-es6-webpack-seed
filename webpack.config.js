module.exports = {
    entry: './sketch/sketch.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8888,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.js$/, 
            loader: 'eslint-loader', 
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [ '', '.js', '.css', '.styl', '.jpg', '.png', '.gif', '.ttf']
    },
}