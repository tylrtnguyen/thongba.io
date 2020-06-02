const path = require('path')

module.exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions

}

exports.onCreateWebpackConfig = ({actions, loaders}) => {
    actions.setWebpackConfig({
        resolve:{
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@images': path.resolve(__dirname, 'src/assets/images'),
                '@icons': path.resolve(__dirname, 'src/assets/icons'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@templates': path.resolve(__dirname, 'src/templates'),
                '@common': path.resolve(__dirname, 'src/common'),
                '@utils': path.resolve(__dirname, 'src/utils')
            }
        }
    })
}