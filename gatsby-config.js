module.exports = {
  pathPrefix: "/meir-sadna-2",
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'אומנות השחרור - סדנה עם מאיר אבינר',
        short_name: 'אומנות השחרור',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ff6b6b',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
