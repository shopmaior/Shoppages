module.exports = {
  config: {
    page_name: "ACME Corporation",
    page_slug: "acme",
    page_description: "Essa é uma página de exemplo do Shopmaior Businesses"
  },

  // Deprecated
  dataPage: {
    name: "ACME Co.", 
    logotype: "#"
  },

  // NAVBAR
  navBarAppearance: {
    style:  "light",  // ligth or dark
    fixed:  "",       // top or bottom
    sticky: "",       // top or bottom
  },

  navItems: [
    {
      slug: "home", 
      title: "Inicio"
    },
    {
      slug: "about", 
      title: "Sobre"
    },
  ],

  // HEADER
  headerAppearance: {
    type: "default",
    classes: [
      "bg-primary", // https://getbootstrap.com.br/docs/4.1/utilities/colors/#cores-de-fundo 
      "text-white"  // https://getbootstrap.com.br/docs/4.1/utilities/colors/#cores
    ]
  },

  // FOOTER
  footerAppearance: {
    type: "default",
    classes: [
      "bg-dark",
    ],
  },
}
