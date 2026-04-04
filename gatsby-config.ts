import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `AI Finance & Lending - Expert Mortgage Brokers Australia`,
    description: `Get expert mortgage advice and access to 40+ lenders. Pre-approval in 24 hours. No upfront fees. Trusted by 2,500+ Australian homeowners.`,
    siteUrl: `https://www.aifinancelending.com.au`,
    author: `AI Finance & Lending`,
    keywords: `mortgage broker, home loans, refinancing, first home buyer, investment loans, construction loans, mortgage advisor, Australian mortgage broker, home loan specialist`,
    image: `/app-logo.png`,
    twitterUsername: `@aifinance`,
    phone: `1300 000 000`,
    email: `hello@aifinancelending.com.au`,
    address: `Level 10, 123 Queen Street, Melbourne VIC 3000`,
    businessHours: `Mon-Fri: 9am-6pm, Sat: 10am-4pm`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AI Finance & Lending`,
        short_name: `AI Finance`,
        description: `Expert mortgage brokers helping Australians secure the best home loans`,
        start_url: `/`,
        background_color: `#0B1C3D`,
        theme_color: `#C8A55A`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => `https://www.aifinancelending.com.au`,
        resolvePages: ({ allSitePage: { nodes: allPages } }: any) => {
          return allPages.map((page: any) => {
            return { ...page };
          });
        },
        serialize: ({ path }: any) => {
          return {
            url: path,
            changefreq: `weekly`,
            priority: path === "/" ? 1.0 : 0.8,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.aifinancelending.com.au",
        sitemap: "https://www.aifinancelending.com.au/sitemap-index.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/private"],
          },
        ],
      },
    },
  ],
};

export default config;
