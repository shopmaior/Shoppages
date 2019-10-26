import { Container, Row, Col } from 'reactstrap';

export default ({children, config, props, id}) => (
  <section id={id}>
    <Container>
      <Row>
        <Col {...props}>
          {children}
        </Col>
      </Row>
    </Container>
  </section>
);