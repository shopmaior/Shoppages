import { Container, Row, Col } from 'reactstrap';

export default ({dataPage}) => (
  <footer className="py-5 bg-dark">
    <Container>
      <p className="m-0 text-center text-white">Copyright &copy; {dataPage.name} 2019</p>
    </Container>
  </footer>
);