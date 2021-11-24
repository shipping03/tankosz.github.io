module.exports = {
  siteMetadata: {
    title: "深圳市腾柯科技有限公司",
    description:
      "深圳市腾柯科技有限公司主营蓝牙音箱、耳机、移动电源、墙充、无线充等电脑周边类产品",
    keywords: "深圳市腾柯科技有限公司,无线音箱,蓝牙音箱,耳机,移动电源,墙充,无线充,车充,电脑周边类产品,深圳腾柯,湖南腾柯,东莞腾柯,cellular,Electronic product,Speakers,Bluetooth speaker,Wood speaker,portable speaker,mini speaker,Voice,cloth speaker,waterproof speaker,outdoor speaker,flashing speaker,Sounds effect,sounds item,Audio accessories,mobile accessories,music,earbuds,earphone,headset,bluetooth headphone,headphone,sports earbuds,sports headset,sports headphone,gift,gift company,promotion industry,echo,Mono,True wireless,wireless speaker,wireless headphone,wireless earbud,Audio,Stereo,Bookshelf speaker,Surround sounds,bass,subwoofer,tweeter,water resistant earbuds,water resistant earphone,water resistant headset, bluetooth headphone,headphone,sports earbuds,sports headset,sports headphone,multiroom speaker,Electronics,Surround Sound Systems,Wireless,Cell Phone Accessory Kits,Car Speakerphones,Cell Phone Accessory Kits,bluetooth headset,bluetooth earphone,Bluetooth earbuds,bluetooth speaker with microphone,earbudswith microphone,bluetooth headset with microphone,cell phone accessory",
  },
  plugins: [
    "react-bmapgl",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
