import { Container, Row, Col } from 'reactstrap';

export default (config) => (
  <header className="bg-primary text-white">
    <Container className="text-center">
      <h1>Welcome to {config.page_name}</h1>
      <p className="lead">{config.page_description}</p>
    </Container>
  </header>
);