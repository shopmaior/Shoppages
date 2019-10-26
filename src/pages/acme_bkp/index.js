import Layout from '../../layout';
import Config from './config';

const Index = () => (
  // Passar parametros para layout
  <Layout {...Config} >
    <p>ACME</p>
  </Layout>
);

export default Index;