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
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@templates': path.resolve(__dirname, 'src/templates')
            }
        }
    })
}