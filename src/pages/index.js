import Layout from '../layout';

const config = {
  dataPage: {
    name: "", 
    logotype: "#"
  },

  // navItems: [
  //   {
  //     slug: "", 
  //     title: ""
  //   },
  // ],
}

const Index = () => (
  // Passar parametros para layout
  <Layout {...config} >
    <p>...</p>
  </Layout>
);

export default Index;