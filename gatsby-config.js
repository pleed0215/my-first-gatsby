module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "my-first-gatsby",
    },
    plugins: [{
        resolve: `gatsby-plugin-typescript`,
        options: {
            isTSX: true, // defaults to false
            jsxPragma: `jsx`, // defaults to "React"
            allExtensions: true, // defaults to false
        },
    }, {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            // Add any options here
        },
    }, "gatsby-plugin-image",
        "gatsby-plugin-sharp"],
};
