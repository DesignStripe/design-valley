const tools = [
  {
    category: "stock-images",
    name: "Burst by Shopify",
    url: "https://burst.shopify.com/",
    description: "Download free, high-resolution images.",
    image: "https://picsum.photos/200/",
    id: 0
  },
  {
    category: "stock-images",
    name: "Gratisography",
    url: "https://gratisography.com/",
    description:
      "The world's quirkiest collection of free high-resolution pictures you can use on your personal and commercial projects.",
    image: "https://picsum.photos/200/",
    id: 1
  },
  {
    category: "stock-images",
    name: "Life of Pix",
    url: "https://www.lifeofpix.com/",
    description: "Free high resolution photography.",
    image: "https://picsum.photos/200/",
    id: 2
  },
  {
    category: "stock-images",
    name: "Moose",
    url: "https://photos.icons8.com/",
    description:
      "A collection of stock photography in a single style. Good for collages. Free for commercial use.",
    image: "https://picsum.photos/200/",
    id: 3
  },
  {
    category: "stock-images",
    name: "New Old Stock",
    url: "http://nos.twnsnd.co/",
    description: "Vintage photos from the public archives.",
    image: "https://picsum.photos/200/",
    id: 4
  },
  {
    category: "stock-images",
    name: "Pexels",
    url: "https://www.pexels.com",
    description: "Free stock photos you can use everywhere.",
    image: "https://picsum.photos/200/",
    id: 5
  },
  {
    category: "stock-images",
    name: "Pixabay",
    url: "https://pixabay.com/",
    description:
      "Over 1.6 million royalty free stock photos and videos shared by our generous community.",
    image: "https://picsum.photos/200/",
    id: 6
  },
  {
    category: "stock-images",
    name: "reshot",
    url: "https://www.reshot.com/",
    description: "Handpicked, non-stocky images. Yours to use as you wish.",
    image: "https://picsum.photos/200/",
    id: 7
  },
  {
    category: "stock-images",
    name: "StockSnap",
    url: "https://stocksnap.io/",
    description:
      "High quality and high resolution stock images free from all copyright restrictions(CC0).",
    image: "https://picsum.photos/200/",
    id: 8
  },
  {
    category: "stock-images",
    name: "Unsplash",
    url: "https://unsplash.com/",
    description:
      "Beautiful, free images and photos that you can download and use for any project.",
    image: "https://picsum.photos/200/",
    id: 9
  },
  {
    category: "stock-videos",
    name: "Coverr",
    url: "https://coverr.co/",
    description:
      "Download royalty free (for personal and commercial use), unique and beautiful video footage for your website or any project.",
    image: "https://picsum.photos/200/",
    id: 10
  },
  {
    category: "stock-videos",
    name: "Life of Vids",
    url: "https://www.lifeofvids.com/",
    description:
      "Free videos for personal & commercial uses. New videos added weekly.",
    image: "https://picsum.photos/200/",
    id: 11
  },
  {
    category: "stock-videos",
    name: "Mixkit",
    url: "https://mixkit.co/",
    description:
      "Extraordinary HD videos for you to use, completely free of charge.",
    image: "https://picsum.photos/200/",
    id: 12
  },
  {
    category: "stock-videos",
    name: "Pexels Videos",
    url: "https://www.pexels.com/videos/",
    description: "The best free videos shared by the Pexels community.",
    image: "https://picsum.photos/200/",
    id: 13
  },
  {
    category: "stock-videos",
    name: "Videvo",
    url: "https://www.videvo.net/",
    description: "Free HD stock footage & motion graphics for any project.",
    image: "https://picsum.photos/200/",
    id: 14
  },
  {
    category: "icons",
    name: "Animaticons",
    url: "http://animaticons.co/",
    description: "Beautiful, customizable animated GIF icons",
    image: "https://picsum.photos/200/",
    id: 15
  },
  {
    category: "icons",
    name: "Eva Icons",
    url: "https://akveo.github.io/eva-icons/#/",
    description:
      "Eva Icons is a pack of more than 480 beautifully crafted Open Source icons for common actions and items.",
    image: "https://picsum.photos/200/",
    id: 16
  },
  {
    category: "icons",
    name: "Evericons",
    url: "http://www.evericons.com",
    description:
      "Evericons is a collection of 460+ well-crafted icons for your next project.",
    image: "https://picsum.photos/200/",
    id: 17
  },
  {
    category: "icons",
    name: "Feather icons",
    url: "https://feathericons.com/",
    description:
      "Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.",
    image: "https://picsum.photos/200/",
    id: 18
  },
  {
    category: "icons",
    name: "Flaticon",
    url: "https://www.flaticon.com",
    description:
      "The largest database of free icons available in PNG, SVG, EPS, PSD and BASE 64 formats.",
    image: "https://picsum.photos/200/",
    id: 19
  },
  {
    category: "icons",
    name: "Font Awesome",
    url: "https://fontawesome.com/",
    description:
      "Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.",
    image: "https://picsum.photos/200/",
    id: 20
  },
  {
    category: "icons",
    name: "Grommet Icons",
    url: "https://icons.grommet.io/",
    description: "Iconography for Grommet and React.js",
    image: "https://picsum.photos/200/",
    id: 21
  },
  {
    category: "icons",
    name: "IconBros",
    url: "https://www.iconbros.com/",
    description: "1227+ free icons grouped in 38 collections.",
    image: "https://picsum.photos/200/",
    id: 22
  },
  {
    category: "icons",
    name: "iconmonstr",
    url: "https://iconmonstr.com/",
    description: "Discover 4432+ free icons in 307 collections",
    image: "https://picsum.photos/200/",
    id: 23
  },
  {
    category: "icons",
    name: "Icons8",
    url: "https://icons8.com/icons",
    description:
      "Get free icons designed to combine perfectly and fit into the style of your design.",
    image: "https://picsum.photos/200/",
    id: 24
  },
  {
    category: "icons",
    name: "Ionicons",
    url: "https://ionicons.com/",
    description:
      "Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the Ionic Framework team.",
    image: "https://picsum.photos/200/",
    id: 25
  },
  {
    category: "icons",
    name: "Ikonate",
    url: "https://www.ikonate.com/",
    description: "Fully customisable & accessible vector icons",
    image: "https://picsum.photos/200/",
    id: 26
  },
  {
    category: "icons",
    name: "Material Design icons",
    url: "https://materialdesignicons.com/",
    description:
      "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
    image: "https://picsum.photos/200/",
    id: 27
  },
  {
    category: "icons",
    name: "Nucleo app",
    url: "https://nucleoapp.com/",
    description:
      "Nucleo is a beautiful library of 26831 icons, and a powerful application to collect, customize and export all your icons.",
    image: "https://picsum.photos/200/",
    id: 28
  },
  {
    category: "icons",
    name: "Οutlane",
    url: "https://outlane.co/graphics/animated-svg-icons-pack/",
    description:
      "The pack includes 100 hand-crafted animated vector icons that you can use on any website or app.",
    image: "https://picsum.photos/200/",
    id: 29
  },
  {
    category: "icons",
    name: "Potlab Icons",
    url: "http://www.potlabicons.com",
    description: "Animated SVG icons for web projects.",
    image: "https://picsum.photos/200/",
    id: 30
  },
  {
    category: "icons",
    name: "Tilda Icons",
    url: "https://tilda.cc/free-icons/",
    description: "Free icons for Landing Pages. 700+ Icons/43 Themes!",
    image: "https://picsum.photos/200/",
    id: 31
  },
  {
    category: "icons",
    name: "Prefect Icons",
    url: "http://www.perfecticons.com/",
    description: "Download Free Perfect Vector Icons.",
    image: "https://picsum.photos/200/",
    id: 32
  },
  {
    category: "icons",
    name: "Remix Icons",
    url: "https://remixicon.com/",
    description:
      "Remix Icon is a set of open-source neutral-style system symbols elaborately crafted for designers and developers.",
    image: "https://picsum.photos/200/",
    id: 33
  },
  {
    category: "icons",
    name: "Slice",
    url: "https://slice.design/glyphs",
    description: "Various Perfectly Shaped Glyphs",
    image: "https://picsum.photos/200/",
    id: 34
  },
  {
    category: "icons",
    name: "Streamline 3.0",
    url: "https://streamlineicons.com",
    description: "Over 10.500 in three different weight.",
    image: "https://picsum.photos/200/",
    id: 35
  },
  {
    category: "icons",
    name: "The Noun Project",
    url: "https://thenounproject.com/",
    description: "Over 2 Million curated icons, created by a global community.",
    image: "https://picsum.photos/200/",
    id: 36
  },
  {
    category: "icons",
    name: "Unicons",
    url: "https://iconscout.com/unicons",
    description:
      "1000+ Pixel-perfect vector icons and Iconfont for your next project.",
    image: "https://picsum.photos/200/",
    id: 37
  },
  {
    category: "icons",
    name: "useAnimations",
    url: "https://useanimations.com",
    description:
      "Animated icons in Lottie Framework and After Effects for immediate implementation to your apps or websites.",
    image: "https://picsum.photos/200/",
    id: 38
  },
  {
    category: "icons",
    name: "Zwicon",
    url: "https://www.zwicon.com",
    description: "Handcrafted iconset for your next project",
    image: "https://picsum.photos/200/",
    id: 39
  },
  {
    category: "fonts",
    name: "1001FreeFonts",
    url: "https://www.1001freefonts.com/",
    description:
      "Download 41882 fonts in 21841 families for Windows, Mac and Linux. 1001 Free Fonts offers a huge selection of free fonts. New fonts are added daily.",
    image: "https://picsum.photos/200/",
    id: 40
  },
  {
    category: "fonts",
    name: "Aleo",
    url: "https://www.behance.net/gallery/8018673/ALEO-Free-Font-Family",
    description: "Free contemporary slab serif typeface.",
    image: "https://picsum.photos/200/",
    id: 41
  },
  {
    category: "fonts",
    name: "Archetype",
    url: "https://archetypeapp.com/",
    description:
      "Archetype makes beautiful web typography designs quick and easy to create.",
    image: "https://picsum.photos/200/",
    id: 42
  },
  {
    category: "fonts",
    name: "Behance",
    url:
      "https://www.behance.net/search?content=projects&sort=appreciations&time=week&search=free%20font",
    description:
      "Behance is a network of sites and services specializing in self-promotion, including consulting, online portfolio sites and many free font resources. All you have to do is to add some clever search filters, such as 'free font'.",
    image: "https://picsum.photos/200/",
    id: 43
  },
  {
    category: "fonts",
    name: "Clear Sans",
    url: "https://01.org/clear-SANS",
    description:
      "Clear Sans has been recognized as a versatile OpenType font for screen, print, and Web.",
    image: "https://picsum.photos/200/",
    id: 44
  },
  {
    category: "fonts",
    name: "Cooper Hewitt",
    url:
      "https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/",
    description: "The Typeface created by Chester Jenkins.",
    image: "https://picsum.photos/200/",
    id: 45
  },
  {
    category: "fonts",
    name: "Dafont",
    url: "https://www.dafont.com/",
    description:
      "Archive of freely downloadable fonts. Browse by alphabetical listing, by style, by author or by popularity.",
    image: "https://picsum.photos/200/",
    id: 46
  },
  {
    category: "fonts",
    name: "FontPair",
    url: "https://fontpair.co/",
    description:
      "Font Pair helps designers pair Google Fonts together. Beautiful Google Font combinations and pairs.",
    image: "https://picsum.photos/200/",
    id: 47
  },
  {
    category: "fonts",
    name: "FontSpark",
    url: "https://fontspark.app/",
    description:
      "Helping designers discover the perfect font for their next design project.",
    image: "https://picsum.photos/200/",
    id: 48
  },
  {
    category: "fonts",
    name: "FontSquirrel",
    url: "https://www.fontsquirrel.com/",
    description:
      "Font Squirrel scours the internet for high quality, legitimately free fonts.",
    image: "https://picsum.photos/200/",
    id: 49
  },
  {
    category: "fonts",
    name: "Google Fonts",
    url: "https://fonts.google.com/",
    description:
      "Google Fonts is a library of 900 libre licensed fonts, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.",
    image: "https://picsum.photos/200/",
    id: 50
  },
  {
    category: "fonts",
    name: "Google Noto Font",
    url: "https://www.google.com/get/noto/",
    description: "Beautiful and free fonts for all languages.",
    image: "https://picsum.photos/200/",
    id: 51
  },
  {
    category: "fonts",
    name: "Leon Sans",
    url: "https://leon-kim.com/",
    description:
      "Leon Sans is a geometric sans-serif typeface made with code in 2019 by Jongmin Kim.",
    image: "https://picsum.photos/200/",
    id: 52
  },
  {
    category: "fonts",
    name: "Optician Sans",
    url: "https://optician-sans.com",
    description:
      "A free font based on the historical eye charts and optotypes used by opticians world wide.",
    image: "https://picsum.photos/200/",
    id: 53
  },
  {
    category: "fonts",
    name: "Picas",
    url: "https://picas.now.sh/",
    description: "Generate Project Logo with Google Fonts",
    image: "https://picsum.photos/200/",
    id: 54
  },
  {
    category: "fonts",
    name: "Type-Scale",
    url: "https://type-scale.com/",
    description: "Preview and choose the right type scale for your project.",
    image: "https://picsum.photos/200/",
    id: 55
  },
  {
    category: "fonts",
    name: "Typewolf",
    url: "https://www.typewolf.com/",
    description:
      "Typewolf helps designers choose the perfect font combination for their next design project",
    image: "https://picsum.photos/200/",
    id: 56
  },
  {
    category: "fonts",
    name: "Variable Fonts",
    url: "https://colordesigner.io/",
    description: "A simple resource for finding and trying variable fonts.",
    image: "https://picsum.photos/200/",
    id: 57
  },
  {
    name: "Absurb",
    url: "https://absurd.design/",
    description:
      "What about surrealist illustrations for landing pages? Take every user on an individual journey through their own imagination.",
    image: "https://picsum.photos/200/",
    id: 58
  },
  {
    category: "illustrations",
    name: "Avataaars",
    url: "https://getavataaars.com/",
    description:
      "Mix and match avatar illustrations. Combine clothes, hair, emotions, accessories, and colors.",
    image: "https://picsum.photos/200/",
    id: 59
  },
  {
    category: "illustrations",
    name: "Blobmaker",
    url: "https://www.blobmaker.app/",
    description: "Create organic svg shapes in just a few seconds.",
    image: "https://picsum.photos/200/",
    id: 60
  },
  {
    category: "illustrations",
    name: "Charco",
    url: "https://www.karthiksrinivas.in/charco",
    description:
      "A set of 16 handcrafted illustrations for your web & app projects by Karthik Srinivas.",
    image: "https://picsum.photos/200/",
    id: 61
  },
  {
    category: "illustrations",
    name: "Delesign",
    url: "https://delesign.com/free-designs/graphics/",
    description:
      "Use our royalty-free designs for your website, social media, blog, email newsletters, and more.",
    image: "https://picsum.photos/200/",
    id: 62
  },
  {
    category: "illustrations",
    name: "DrawKit",
    url: "https://www.drawkit.io/",
    description:
      "DrawKit is a collection of free, beautiful, customisable MIT licensed SVG illustrations in two styles",
    image: "https://picsum.photos/200/",
    id: 63
  },
  {
    category: "illustrations",
    name: "FreePik",
    url: "https://www.freepik.com/",
    description:
      "More than 3 millions free vectors, PSD, photos and free icons.",
    image: "https://picsum.photos/200/",
    id: 64
  },
  {
    category: "illustrations",
    name: "IRA Design",
    url: "https://iradesign.io/",
    description:
      "With IRA Design, you can create amazing illustrations, using hand-drawn sketch components, a cool selection of 5 gradients and ai., svg. or png. formats.",
    image: "https://picsum.photos/200/",
    id: 65
  },
  {
    category: "illustrations",
    name: "Ηumaaans",
    url: "https://www.humaaans.com/",
    description: "Mix-&-match illustrations of people with a design library.",
    image: "https://picsum.photos/200/",
    id: 66
  },
  {
    category: "illustrations",
    name: "Lukasz Adam",
    url: "https://lukaszadam.com/illustrations",
    description:
      "Free vector art illustrations and icons. Available for personal and commercial use.",
    image: "https://picsum.photos/200/",
    id: 67
  },
  {
    category: "illustrations",
    name: "ManyPixels",
    url: "https://gallery.manypixels.co/",
    description:
      "Each week, discover royalty-free illustrations to power up your projects.",
    image: "https://picsum.photos/200/",
    id: 68
  },
  {
    category: "illustrations",
    name: "Mixkit",
    url: "https://mixkit.co/",
    description:
      "Mixkit is a curated gallery of high-quality videos and art, made by some of the world’s most talented creators, with all content licensed for free.",
    image: "https://picsum.photos/200/",
    id: 69
  },
  {
    category: "illustrations",
    name: "Ouch",
    url: "https://icons8.com/ouch",
    description: "Free illustrations to class up your project.",
    image: "https://picsum.photos/200/",
    id: 70
  },
  {
    category: "illustrations",
    name: "Stubborn Generator",
    url: "https://stubborn.fun/",
    description:
      "Stubborn Generator is a collection of 25 incredibly cool characters.",
    image: "https://picsum.photos/200/",
    id: 71
  },
  {
    category: "illustrations",
    name: "Undraw",
    url: "http://undraw.co/",
    description:
      "Open-source illustrations for every project you can imagine and create.",
    image: "https://picsum.photos/200/",
    id: 72
  },
  {
    category: "illustrations",
    name: "404 Illustrations",
    url: "https://www.kapwing.com/404-illustrations",
    description: "Trendy, ready to use images for your 404 page",
    image: "https://picsum.photos/200/",
    id: 73
  },
  {
    category: "design-systems",
    name: "Ant Design",
    url: "https://ant.design/)** by [Alibaba",
    description:
      "https://www.alibaba.com/) - An enterprise-class UI design language and React implementation.",
    image: "https://picsum.photos/200/",
    id: 74
  },
  {
    category: "design-systems",
    name: "Atlaskit",
    url: "https://atlaskit.atlassian.com/)** by [Atlassian",
    description:
      "https://atlassian.com/) - Atlassian's official UI library, built according to the Atlassian Design Guidelines.",
    image: "https://picsum.photos/200/",
    id: 75
  },
  {
    category: "design-systems",
    name: "Audi Design",
    url:
      "https://www.audi.com/ci/en/guides/user-interface/introduction.html)** by [Audi",
    description:
      "https://www.audi.com/en.html) - Audi user interfaces are as varied as their uses – ranging from inspiring websites to applications for a particular service.",
    image: "https://picsum.photos/200/",
    id: 76
  },
  {
    category: "design-systems",
    name: "Backpack",
    url: "https://backpack.github.io/)** by [Skyscanner",
    description:
      "https://www.skyscanner.net/) - Backpack is a collection of design resources, reusable components and guidelines for creating Skyscanner products.",
    image: "https://picsum.photos/200/",
    id: 77
  },
  {
    category: "design-systems",
    name: "Grommet",
    url: "https://v2.grommet.io/)** by [HP Enterprise",
    description:
      "https://www.hpe.com/emea_europe/en/home.html) - Build responsive and accessible mobile-first projects for the web with an easy to use component library.",
    image: "https://picsum.photos/200/",
    id: 78
  },
  {
    category: "design-systems",
    name: "IBM Carbon",
    url: "https://www.carbondesignsystem.com/)** by [IBM Cloud products",
    description:
      ") - The Carbon Design System is IBM’s open-source design system for products and experiences.",
    image: "https://picsum.photos/200/",
    id: 79
  },
  {
    category: "design-systems",
    name: "Lightning",
    url: "https://www.lightningdesignsystem.com/)** by [SalesForce",
    description:
      "https://www.salesforce.com/eu/) - Create the world’s best enterprise app experiences.",
    image: "https://picsum.photos/200/",
    id: 80
  },
  {
    category: "design-systems",
    name: "Mailchimp Patterns",
    url: "https://ux.mailchimp.com/patterns)** by [Mailchimp",
    description:
      "https://mailchimp.com/) - UX patterns by the Mailchimp design team.",
    image: "https://picsum.photos/200/",
    id: 81
  },
  {
    category: "design-systems",
    name: "Material UI",
    url: "https://material-ui.com/)** by [Google",
    description:
      "https://www.google.com/) - React components that implement Google's Material Design.",
    image: "https://picsum.photos/200/",
    id: 82
  },
  {
    category: "design-systems",
    name: "Nachos",
    url: "https://design.trello.com/)** by [Trello",
    description:
      "https://trello.com/) - Nachos is Trello's design system (and also our favorite snack).",
    image: "https://picsum.photos/200/",
    id: 83
  },
  {
    category: "design-systems",
    name: "Plasma",
    url: "https://github.com/wework/plasma)** by [WeWork",
    description:
      "https://www.wework.com/) - Plasma is a design system for creating sensible, modern interfaces.",
    image: "https://picsum.photos/200/",
    id: 84
  },
  {
    category: "design-systems",
    name: "Pluralsight",
    url: "https://design-system.pluralsight.com/)** by [Pluralsight",
    description:
      "https://www.pluralsight.com/) - The UI building blocks for creating a cohesive design across Pluralsight products",
    image: "https://picsum.photos/200/",
    id: 85
  },
  {
    category: "design-systems",
    name: "Polaris",
    url: "https://polaris.shopify.com/)** by [Shopify",
    description:
      "https://www.shopify.com/) - Our design system helps us work together to build a great experience for all of Shopify’s merchants.",
    image: "https://picsum.photos/200/",
    id: 86
  },
  {
    category: "design-systems",
    name: "Primer",
    url: "https://primer.style/)** by [Github",
    description:
      "https://github.com/) - Resources, tooling, and design guidelines for building interfaces with GitHub’s design system.",
    image: "https://picsum.photos/200/",
    id: 87
  },
  {
    category: "design-inspiration",
    name: "awwwards.",
    url: "https://www.awwwards.com/",
    description:
      "Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.",
    image: "https://picsum.photos/200/",
    id: 88
  },
  {
    category: "design-inspiration",
    name: "Behance",
    url: "https://www.behance.net/",
    description:
      "Showcase and discover the latest work from top online portfolios by creative professionals across industries.",
    image: "https://picsum.photos/200/",
    id: 89
  },
  {
    category: "design-inspiration",
    name: "CallToIdea",
    url: "https://www.calltoidea.com/",
    description:
      "Calltoidea is the unique place where you can find inspiration. A great tool created by a designer for web professionals.",
    image: "https://picsum.photos/200/",
    id: 90
  },
  {
    category: "design-inspiration",
    name: "DesignMunk",
    url: "https://designmunk.com/",
    description:
      "The ultimate hand picked landing page inspirations from around the web.",
    image: "https://picsum.photos/200/",
    id: 91
  },
  {
    category: "design-inspiration",
    name: "Deviant Art",
    url: "https://www.deviantart.com",
    description:
      "DeviantArt is the world's largest online social community for artists and art enthusiasts, allowing people to connect through the creation and sharing of art.",
    image: "https://picsum.photos/200/",
    id: 92
  },
  {
    category: "design-inspiration",
    name: "Dribbble",
    url: "https://dribbble.com/",
    description:
      "Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.",
    image: "https://picsum.photos/200/",
    id: 93
  },
  {
    category: "design-inspiration",
    name: "h69",
    url: "https://www.h69.design/",
    description: "Landing page colletions & Free resources for designers.",
    image: "https://picsum.photos/200/",
    id: 94
  },
  {
    category: "design-inspiration",
    name: "Httpster",
    url: "https://httpster.net",
    description:
      "Httpster is an inspiration resource showcasing totally rocking websites made by people from all over the world.",
    image: "https://picsum.photos/200/",
    id: 95
  },
  {
    category: "design-inspiration",
    name: "Land-Book",
    url: "https://land-book.com/",
    description:
      "We collect awesome websites to help creatives find inspiration & motivation to do rad stuff.",
    image: "https://picsum.photos/200/",
    id: 96
  },
  {
    category: "design-inspiration",
    name: "Lapa Ninja",
    url: "https://www.lapa.ninja/",
    description:
      "The best landing page design inspiration from around the web.",
    image: "https://picsum.photos/200/",
    id: 97
  },
  {
    category: "design-inspiration",
    name: "Muzli",
    url: "https://muz.li/",
    description:
      "Muzli is a new-tab Chrome extension that instantly delivers relevant design stories and inspiration.",
    image: "https://picsum.photos/200/",
    id: 98
  },
  {
    category: "design-inspiration",
    name: "OnePageLove",
    url: "https://onepagelove.com/",
    description:
      "One Page Love is a One Page website design gallery showcasing the best Single Page websites, templates and resources.",
    image: "https://picsum.photos/200/",
    id: 99
  },
  {
    category: "design-inspiration",
    name: "Pttrns",
    url: "https://pttrns.com/",
    description:
      "Pttrns is the finest collection of mobile design patterns, resources and inspiration.",
    image: "https://picsum.photos/200/",
    id: 100
  },
  {
    category: "design-inspiration",
    name: "Webframe",
    url: "https://webframe.xyz/",
    description: "Discover and be inspired by beautiful webapp designs",
    image: "https://picsum.photos/200/",
    id: 101
  },
  {
    category: "colors",
    name: "Accessible Color Matrix",
    url: "https://toolness.github.io/accessible-color-matrix/",
    description:
      "A tool to help designers build color palettes with combinations that conform with accessibility standards.",
    image: "https://picsum.photos/200/",
    id: 102
  },
  {
    category: "colors",
    name: "Colorable",
    url: "https://colors.muz.li/",
    description: "Color combination contrast tester.",
    image: "https://picsum.photos/200/",
    id: 103
  },
  {
    category: "colors",
    name: "Colorbook",
    url: "https://www.colorbook.io/",
    description:
      "Your hex color information and conversion source. We at colorbook have one mission: we want to give each color its place. Think of it as of a facebook of colors.",
    image: "https://picsum.photos/200/",
    id: 104
  },
  {
    category: "colors",
    name: "ColorBox",
    url: "https://www.colorbox.io/",
    description: "Colorbox is a color tool to produce color sets.",
    image: "https://picsum.photos/200/",
    id: 105
  },
  {
    category: "colors",
    name: "Color-hex",
    url: "https://www.color-hex.com/color-palettes/",
    description:
      "Color-hex gives information about colors including color models (RGB,HSL,HSV and CMYK).",
    image: "https://picsum.photos/200/",
    id: 106
  },
  {
    category: "colors",
    name: "Color Designer",
    url: "https://colordesigner.io/",
    description: "Just pick a color, and the app does the rest.",
    image: "https://picsum.photos/200/",
    id: 107
  },
  {
    category: "colors",
    name: "Color Hunt",
    url: "https://colorhunt.co/",
    description:
      "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.",
    image: "https://picsum.photos/200/",
    id: 108
  },
  {
    category: "colors",
    name: "Colorinspire",
    url: "https://www.colorinspire.io/",
    description:
      "Curated color inspiration. Free to use for your next project.",
    image: "https://picsum.photos/200/",
    id: 109
  },
  {
    category: "colors",
    name: "Color Lisa",
    url: "http://www.colorlisa.com/",
    description:
      "Color palette masterpieces from the world's greatest artists.",
    image: "https://picsum.photos/200/",
    id: 110
  },
  {
    category: "colors",
    name: "Color Quote",
    url: "https://www.felixjoy.co/colorquote#color-hero",
    description:
      "Daily dose of color combination and inspirational quote cards for designers and developers.",
    image: "https://picsum.photos/200/",
    id: 111
  },
  {
    category: "colors",
    name: "Color Safe",
    url: "http://colorsafe.co/",
    description:
      "Empowering designers with beautiful and accessible color palettes based on WCAG Guidelines of text and background contrast ratios.",
    image: "https://picsum.photos/200/",
    id: 112
  },
  {
    category: "colors",
    name: "Color Space",
    url: "https://mycolor.space/",
    description: "Build beautiful color palettes by entering just one color.",
    image: "https://picsum.photos/200/",
    id: 113
  },
  {
    category: "colors",
    name: "Color Tool",
    url: "https://material.io/tools/color/",
    description:
      "Create, share, and apply color palettes to your UI, as well as measure the accessibility level of any color combination.",
    image: "https://picsum.photos/200/",
    id: 114
  },
  {
    category: "colors",
    name: "Colors by Eva Design System",
    url: "https://colors.eva.design/",
    description:
      "Generate color pallets using deep learning powered algorithm.",
    image: "https://picsum.photos/200/",
    id: 115
  },
  {
    category: "colors",
    name: "Colors by Klart",
    url: "https://klart.io/colors/",
    description: "Colors is a 100% data-driven collection of color palettes.",
    image: "https://picsum.photos/200/",
    id: 116
  },
  {
    category: "colors",
    name: "CopyPalette",
    url: "https://copypalette.netlify.com",
    description: "Hassle-free export your palette to SVG format",
    image: "https://picsum.photos/200/",
    id: 117
  },
  {
    category: "colors",
    name: "Culrs",
    url: "https://culrs.com/",
    description:
      "Colors that work together are curated and fashioned into quality palettes that you can incorporate.",
    image: "https://picsum.photos/200/",
    id: 118
  },
  {
    category: "colors",
    name: "Flat UI Colors",
    url: "https://flatuicolors.com/",
    description: "280 handpicked colors ready for COPY & PASTE.",
    image: "https://picsum.photos/200/",
    id: 119
  },
  {
    category: "colors",
    name: "Khroma",
    url: "http://khroma.co/",
    description: "Discover, search, and save color combinations you'll love.",
    image: "https://picsum.photos/200/",
    id: 120
  },
  {
    category: "colors",
    name: "Muzli Colors",
    url: "https://colors.muz.li/",
    description: "Create Beautiful Color Schemes that works.",
    image: "https://picsum.photos/200/",
    id: 121
  },
  {
    category: "colors",
    name: "Palettee app",
    url: "https://palettte.app/",
    description: "The definite palette editing and remapping tool.",
    image: "https://picsum.photos/200/",
    id: 122
  },
  {
    category: "colors",
    name: "Palx",
    url: "https://palx.jxnblk.com/",
    description:
      "Provide a single color value and Palx returns a full-spectrum color palette",
    image: "https://picsum.photos/200/",
    id: 123
  },
  {
    category: "colors",
    name: "Picular",
    url: "https://picular.co/",
    description:
      "A rocket fast primary color generator using Google's image search.",
    image: "https://picsum.photos/200/",
    id: 124
  },
  {
    category: "colors",
    name: "Tints and Shades generator",
    url: "https://maketintsandshades.com/",
    description: "Easily make tints and shades in 10% increments",
    image: "https://picsum.photos/200/",
    id: 125
  },
  {
    category: "gradients",
    name: "Eggradients",
    url: "https://www.eggradients.com/",
    description:
      "A gradient color palette containing +200 gradient background color.",
    image: "https://picsum.photos/200/",
    id: 126
  },
  {
    category: "gradients",
    name: "Grabient",
    url: "https://www.grabient.com/",
    description: "Beautiful and simple UI for generating web gradients.",
    image: "https://picsum.photos/200/",
    id: 127
  },
  {
    category: "gradients",
    name: "Gradient Backgrounds",
    url: "https://cssgradient.io/gradient-backgrounds/",
    description:
      "A curated list of the best gradient websites across the internet.",
    image: "https://picsum.photos/200/",
    id: 128
  },
  {
    category: "gradients",
    name: "Gradient Cards",
    url: "https://gradients.cssgears.com",
    description: "A simple and beautiful list of editable gradients",
    image: "https://picsum.photos/200/",
    id: 129
  },
  {
    category: "gradients",
    name: "GradientsList",
    url: "https://www.gradientslist.com",
    description:
      "Gradients List is the biggest collection of gradients on the web.",
    image: "https://picsum.photos/200/",
    id: 130
  },
  {
    category: "gradients",
    name: "uiGradients",
    url: "https://uigradients.com/#IbizaSunset",
    description:
      "A handpicked collection of beautiful color gradients for designers and developers.",
    image: "https://picsum.photos/200/",
    id: 131
  },
  {
    category: "gradients",
    name: "WebGradients",
    url: "https://webgradients.com/",
    description:
      "WebGradients is a free collection of 180 linear gradients that you can use as content backdrops in any part of your website.",
    image: "https://picsum.photos/200/",
    id: 132
  },
  {
    category: "design-tools",
    name: "Affinity",
    url: "https://affinity.serif.com/en-gb/",
    description:
      "Affinity - the fastest, smoothest, most precise professional creative software.",
    image: "https://picsum.photos/200/",
    id: 133
  },
  {
    category: "design-tools",
    name: "Photoshop",
    url: "https://www.adobe.com/products/photoshop.html",
    description:
      "The industry standard in digital imaging and used by professionals worldwide for design, photography, video editing & more.",
    image: "https://picsum.photos/200/",
    id: 134
  },
  {
    category: "design-tools",
    name: "Procreate",
    url: "https://procreate.art/",
    description:
      "Procreate is the most powerful and intuitive digital illustration app available for iPad.",
    image: "https://picsum.photos/200/",
    id: 135
  },
  {
    category: "design-tools",
    name: "Lunacy",
    url: "https://icons8.com/lunacy",
    description: "Free graphic design software with built-in design resources",
    image: "https://picsum.photos/200/",
    id: 136
  },
  {
    category: "prototyping-tools",
    name: "Adobe XD CC",
    url: "https://www.adobe.com/gr_en/products/xd.html",
    description:
      "Design, prototype, and share engaging user experiences across platforms, screens, and devices with Adobe XD CC.",
    image: "https://picsum.photos/200/",
    id: 137
  },
  {
    category: "prototyping-tools",
    name: "Figma",
    url: "https://www.figma.com/",
    description:
      "A better way to design. Design, prototype, and gather feedback all in one place with Figma.",
    image: "https://picsum.photos/200/",
    id: 138
  },
  {
    category: "prototyping-tools",
    name: "InVision Studio",
    url: "https://www.invisionapp.com/studio",
    description:
      "A new platform inspired by the world’s best design teams. Design, prototype, and animate—all in one place.",
    image: "https://picsum.photos/200/",
    id: 139
  },
  {
    category: "prototyping-tools",
    name: "Sketch App",
    url: "https://www.sketchapp.com/",
    description:
      "Sketch is a design toolkit built to help you create your best work — from your earliest ideas, through to final artwork.",
    image: "https://picsum.photos/200/",
    id: 140
  },
  {
    category: "prototyping-tools",
    name: "UXPin",
    url: "https://www.uxpin.com/",
    description:
      "Design tool like no other. Prototypes that feel real, with powers of code components, logic, states and design systems.",
    image: "https://picsum.photos/200/",
    id: 141
  },
  {
    category: "presentation-tools",
    name: "Beautiful.ai",
    url: "https://www.beautiful.ai",
    description: "A.I. Powered Presentation Software",
    image: "https://picsum.photos/200/",
    id: 142
  },
  {
    category: "presentation-tools",
    name: "DeckRobot",
    url: "https://deckrobot.com/",
    description: "Make consistent corporate slide decks in one click",
    image: "https://picsum.photos/200/",
    id: 143
  },
  {
    category: "presentation-tools",
    name: "Google Slides",
    url: "https://www.google.com/slides/about/",
    description:
      "Create a new presentation and edit it with others at the same time — from your computer, phone or tablet.",
    image: "https://picsum.photos/200/",
    id: 144
  },
  {
    category: "presentation-tools",
    name: "Keynote",
    url: "https://www.apple.com/keynote/",
    description:
      "Keynote is the most powerful presentation app ever designed for a mobile device.",
    image: "https://picsum.photos/200/",
    id: 145
  },
  {
    category: "presentation-tools",
    name: "Microsoft PowerPoint",
    url: "https://products.office.com/en/powerpoint",
    description:
      "Microsoft PowerPoint is the best presentation software for meetings, industry talks and business proposals.",
    image: "https://picsum.photos/200/",
    id: 146
  },
  {
    category: "presentation-tools",
    name: "Prezi",
    url: "https://prezi.com/",
    description:
      "The presentation software that uses motion, zoom, and spatial relationships to bring your ideas to life and make you a great presenter.",
    image: "https://picsum.photos/200/",
    id: 147
  },
  {
    category: "presentation-tools",
    name: "Slides",
    url: "https://slides.com/",
    description:
      "Slides is a place for creating, presenting and sharing presentations. The Slides editor is available right in your browser.",
    image: "https://picsum.photos/200/",
    id: 148
  },
  {
    category: "animation-tools",
    name: "Adobe After Effects",
    url: "https://www.adobe.com/gr_en/products/aftereffects.html",
    description:
      "With After Effects CC, the industry-standard motion graphics and visual effects software, you can take any idea and make it move.",
    image: "https://picsum.photos/200/",
    id: 149
  },
  {
    category: "animation-tools",
    name: "Animator by Haiku",
    url: "https://www.haikuforteams.com/",
    description:
      "Haiku Animator is the premier solution for creating cross-platform UI animations.",
    image: "https://picsum.photos/200/",
    id: 150
  },
  {
    category: "animation-tools",
    name: "Anime.js",
    url: "https://animejs.com/",
    description:
      "Anime.js is a lightweight Javascript animation library designed to help you make complex animations with ease.",
    image: "https://picsum.photos/200/",
    id: 151
  },
  {
    category: "animation-tools",
    name: "Animista",
    url: "http://animista.net/",
    description:
      "Animista is a place where you can play with a collection of ready to use CSS animations, tweak them and download only those you will actually use.",
    image: "https://picsum.photos/200/",
    id: 152
  },
  {
    category: "animation-tools",
    name: "CSSFX",
    url: "https://cssfx.dev/",
    description: "Beautifully simple click-to-copy CSS effects",
    image: "https://picsum.photos/200/",
    id: 153
  },
  {
    category: "animation-tools",
    name: "Easings",
    url: "https://easings.net/",
    description:
      "Easing functions specify the rate of change of a parameter over time.",
    image: "https://picsum.photos/200/",
    id: 154
  },
  {
    category: "animation-tools",
    name: "Flinto",
    url: "https://www.flinto.com/",
    description:
      "Flinto is a Mac app used by top designers around the world to create interactive and animated prototypes of their app designs.",
    image: "https://picsum.photos/200/",
    id: 155
  },
  {
    category: "animation-tools",
    name: "Keyframes",
    url: "https://keyframes.app/",
    description: "An insanely simple way to create CSS animations.",
    image: "https://picsum.photos/200/",
    id: 156
  },
  {
    category: "animation-tools",
    name: "LightBox",
    url: "https://uselightbox.com/",
    description: "LightBox is a 2D, Hand-Drawn animation package.",
    image: "https://picsum.photos/200/",
    id: 157
  },
  {
    category: "animation-tools",
    name: "Principle",
    url: "https://principleformac.com/",
    description:
      "Principle makes it easy to design animated and interactive user interfaces.",
    image: "https://picsum.photos/200/",
    id: 158
  },
  {
    category: "animation-tools",
    name: "Lottie",
    url: "https://airbnb.design/lottie/",
    description:
      "Lottie is an iOS, Android, and React Native library that renders After Effects animations in real time",
    image: "https://picsum.photos/200/",
    id: 159
  },
  {
    category: "animation-tools",
    name: "Spirit",
    url: "https://spiritapp.io",
    description:
      "The ultimate tool to create high-quality animations directly in the browser.",
    image: "https://picsum.photos/200/",
    id: 160
  },
  {
    category: "animation-tools",
    name: "SVG Artista",
    url: "https://svgartista.net/",
    description: "Little tool that helps you create SVG animations",
    image: "https://picsum.photos/200/",
    id: 161
  },
  {
    category: "animation-tools",
    name: "Zdog",
    url: "https://zzz.dog/",
    description:
      "Round, flat, designer-friendly pseudo-3D engine for canvas & SVG",
    image: "https://picsum.photos/200/",
    id: 162
  },
  {
    category: "mockup-tools",
    name: "Clean Mockups",
    url: "https://cleanmock.com/",
    description: "Create stunning mockups that make your design standout",
    image: "https://picsum.photos/200/",
    id: 163
  },
  {
    category: "mockup-tools",
    name: "Facebook Design",
    url: "https://facebook.design/toolsandresources/",
    description: "A collection of free resources made by designers at Facebook",
    image: "https://picsum.photos/200/",
    id: 164
  },
  {
    category: "mockup-tools",
    name: "LS Graphics",
    url: "https://www.ls.graphics/free",
    description:
      "Branding mockups, devices mockups, scene creators and UI kits for free",
    image: "https://picsum.photos/200/",
    id: 165
  },
  {
    category: "mockup-tools",
    name: "Mockup World",
    url: "https://www.mockupworld.co/all-mockups/",
    description: "The best free Mockups from the Web",
    image: "https://picsum.photos/200/",
    id: 166
  },
  {
    category: "mockup-tools",
    name: "UX Planet list",
    url: "https://uxplanet.org/free-macbook-mockups-psd-sketch-369d20b5638b",
    description: "A great list of free MacBook Mockups",
    image: "https://picsum.photos/200/",
    id: 167
  },
  {
    category: "mockup-tools",
    name: "Threed.io",
    url: "http://threed.io",
    description: "Generate 3D Mockups right in your Browser.",
    image: "https://picsum.photos/200/",
    id: 168
  },
  {
    category: "mockup-tools",
    name: "Qurb",
    url: "https://qurb.rishimohan.me/",
    description: "Web-based free mockup generator",
    image: "https://picsum.photos/200/",
    id: 169
  },
  {
    category: "web-accessibility",
    name: "Contraste",
    url: "https://contrasteapp.com/",
    description:
      "Contraste is a simple app for checking the accessibility of text against the Web Content Accessibility Guidelines (WCAG).",
    image: "https://picsum.photos/200/",
    id: 170
  },
  {
    category: "web-accessibility",
    name: "Color Safe",
    url: "http://colorsafe.co/",
    description:
      "Empowering designers with beautiful and accessible color palettes based on WCAG Guidelines of text and background contrast ratios.",
    image: "https://picsum.photos/200/",
    id: 171
  },
  {
    category: "web-accessibility",
    name: "Stark",
    url: "https://www.getstark.co/",
    description:
      "The plugin to help you design and build products that are accessible, ethical, and inclusive.",
    image: "https://picsum.photos/200/",
    id: 172
  },
  {
    category: "web-accessibility",
    name: "The A11Y Project",
    url: "https://a11yproject.com",
    description: "A community-driven effort to make web accessibility easier.",
    image: "https://picsum.photos/200/",
    id: 173
  },
  {
    category: "ui-kits",
    name: "Eva",
    url: "https://eva.design/",
    description:
      "Customizable Design System easily adaptable to your Brand. Available for Sketch with Mobile and Web component libraries.",
    image: "https://picsum.photos/200/",
    id: 174
  },
  {
    category: "ui-kits",
    name: "UI Store",
    url: "https://www.uistore.design/",
    description: "252 Free Handpicked UI Kits for your real life projects",
    image: "https://picsum.photos/200/",
    id: 175
  },
  {
    category: "ui-kits",
    name: "Velocity UI Kit",
    url:
      "https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit/",
    description: "A dashboard UI kit with a robust design system",
    image: "https://picsum.photos/200/",
    id: 176
  }
];
export default tools;
