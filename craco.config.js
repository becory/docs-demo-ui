module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        configure: (webpackConfig, {
            env, paths
        }) => {
            webpackConfig.output = {
                ...webpackConfig.output,
                // path: path.resolve(__dirname, 'build'), // 修改输出文件目录
                publicPath: ''
            }
            return webpackConfig
        }
    }
}