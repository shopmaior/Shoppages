import Layout from '../../layout';
import Navbar from '../../layout/Navbar';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Section from '../../layout/Section';

import Config from './config';

const Index = () => (
  // Passar parametros para layout
  <Layout {...Config}>
    <Navbar {...Config} />
    <Header {...Config} />

    <Section {...Config} lg="8" className="mx-auto" id="about">
      <h2>About this page</h2>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
    </Section>

    <Footer {...Config} />
  </Layout>
);

export default Index;