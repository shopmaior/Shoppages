module.exports = {
  config: {
    page_name: "ACME Corporation",
    page_slug: "acme",
    page_description: "Essa é uma página de exemplo do Shopmaior Businesses"
  },

  dataPage: {
    name: "ACME Corporation", 
    logotype: "#"
  },

  // NAVBAR
  navBarApparence: {
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
}
