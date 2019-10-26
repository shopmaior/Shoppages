import Layout from '../../layout';

const config = {
  dataPage: {
    name: "ACME", 
    logotype: "#"
  },

  navItems: [
    {
      slug: "home", 
      title: "Inicio"
    },
  ],
}

const Index = () => (
  // Passar parametros para layout
  <Layout {...config} >
    <p>ACME</p>
  </Layout>
);

export default Index;