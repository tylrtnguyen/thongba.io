const path = require('path')

module.exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions

}

exports.onCreateWebpackConfig = ({stage, actions, loaders}) => {

    if(stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null()
                    },
                ],
            },
        });
    }
    actions.setWebpackConfig({
        resolve:{
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@images': path.resolve(__dirname, 'src/assets/images'),
                '@icons': path.resolve(__dirname, 'src/assets/icons'),
                '@fonts': path.resolve(__dirname, 'src/templates/fonts'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@templates': path.resolve(__dirname, 'src/templates'),
                '@common': path.resolve(__dirname, 'src/common'),
                '@utils': path.resolve(__dirname, 'src/utils')
            }
        }
    })
}