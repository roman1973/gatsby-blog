const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')

require('dotenv').config({
    path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
    siteMetadata: {
        title: `GatsbyBlog`,
        description: `My first individual project on Gatsby`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${ __dirname }/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `partial`,
                path: `${ __dirname }/src/partial`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ['src/styles'],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'images',
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1224,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: autoprefixer({ browsers: browserslist() }),
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `BluePes`,
                short_name: `BluePes`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`,
            },
        },
    ]
}
