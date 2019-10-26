import Link from 'next/link'
import Head from 'next/head'

import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

// Estudar como usar PropTypes
export default ({ children, dataPage, config, navItems }) => (
  <div>
    <Head>
      <title>{dataPage.name ? dataPage.name : 'Brand'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-scrolling-nav/css/scrolling-nav.css" crossorigin="anonymous" />
    </Head>
    {/* <Navbar title={dataPage.name ? dataPage.name : 'Brand'} navItems={navItems} />
    <Header {...config} /> */}

    {children}

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </div>
)