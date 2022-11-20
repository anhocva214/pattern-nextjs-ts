module.exports = {
    env: {
        ENDPOINT: process.env.ENDPOINT
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Important: return the modified config

    //     config.plugins.push(
    //         new webpack.ProvidePlugin({
    //           '$': 'jquery',
    //           jQuery: 'jquery'
    //         })
    //       );
    //     return config
    // },
    typescript: {
        ignoreBuildErrors: true
    }
}