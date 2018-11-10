module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "all-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "akash", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Akash Sharma", // Site title.
  siteTitleAlt: "Akash Sharma", // Alternative site title for SEO.
  siteLogo: "", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "http://www.akashsharma.xyz", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: false, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Akash Sharma", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-129024338-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/nxnfufunezn",
    "https://www.linkedin.com/in/akash-sharma-x",
    "https://twitter.com/nxnfufunezn",
    "mailto:hello@akashsharma.xyz"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/nxnfufunezn",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-sharma-x/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/nxnfufunezn",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:hello@akashsharma.xyz",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Akash Sharma" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#000000", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
