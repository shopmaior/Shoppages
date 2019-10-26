import Link from 'next/link'
import Head from 'next/head'

import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';

// Estudar como usar PropTypes
export default ({ children, dataPage, navItems }) => (
  <div>
    <Head>
      <title>{dataPage.name ? dataPage.name : 'Brand'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-scrolling-nav/css/scrolling-nav.css" crossorigin="anonymous" />
    </Head>
    <Navbar title={dataPage.name ? dataPage.name : 'Brand'} navItems={navItems} />
    <header className="bg-primary text-white">
      <Container className="text-center">
        <h1>Welcome to Scrolling Nav</h1>
        <p className="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </Container>
    </header>

    {children}

    <section id="about">
      <Container>
        <Row>
          <Col lg="8" className="mx-auto">
            <h2>About this page</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="services" className="bg-light">
      <Container>
        <Row>
          <Col lg="8" className="mx-auto">
            <h2>Services we offer</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="contact">
      <Container>
        <Row>
          <Col lg="8" className="mx-auto">
            <h2>Contact us</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <Footer dataPage={dataPage} />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </div>
)