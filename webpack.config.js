
export default (webpackConfig) => {
    // Insert a new sass and css loader before the default.
    webpackConfig.module.loaders.unshift({
        test: /\.s(a|c)ss$/,
        loaders: ["style", "css", "sass", "customloader"],
    });

    webpackConfig.module.loaders.unshift({
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
    });

    return webpackConfig;
}