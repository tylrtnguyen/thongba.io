module.exports = {
    siteTitle: 'Thong Nguyen | Software Developer',
    siteDescription: 'Thong Nguyen is a Software Developer based in Toronto, ON who specializes in building exceptional website from front to back',
    siteUrl: 'https://thongba.io',
    siteKeywords: 'Thong Nguyen, Thong Ba, Thong Nguyen, tylrtnguyen, Tyler Thong Nguyen, software engineer, full stack developer, front-end developer, web developer, javascript, toronto',
    siteLanguage: 'en_US',
    name: 'Thong Nguyen',
    location: 'Toronto, ON',
    mainLogo: '/logo-light.svg',
    darkThemeLogo: './logo-dark.svg',
    googleAnalyticsId: 'UA-157352124-1',
    email: 'hello@thongba.io',
    github: 'https://github.com/tylrtnguyen',
    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/tylrtnguyen'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/tylrtnguyen/'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/tylrtnguyen'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/tylrtnguyen/'
        },
        {
            name: 'Mail',
            url: 'mailto:hello@thongba.io'
        }
    ],

    navLinks: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'About',
          url: '/about',
        },
        {
          name: 'Portfolio',
          url: '/portfolio',
        },
        // {
        //   name: 'Blog',
        //   url: '/blog'
        // },   
        {
          name: 'Contact',
          url: '/contact',
        },
    ],

    navHeight: 80,

    colors: {
      black: '#212121',
      charcoal: '#2F4550',
      cadet: '#586F7C',
      danteBrown: '#363636',
      danteBlue: '#11A5ED',
      powderBlue: '#B8DBD9',
      lightGreen: '#B8DBBF',
      ghostWhite: '#F4F4F9',
      danteWhie: '##ECECEC',
      white: '#F7F7F7'
    },

    srConfig: () => ({
      origin: 'right',
      duration: 800,
      delay: 200,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      mobile: true,
      reset: false
    })
}