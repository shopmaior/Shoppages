import { Container, Row, Col } from 'reactstrap';
import normalizeClassesList from '../../../utils/normalizeClassesList';


export default ({ config, headerAppearance }) => (
  <header className={normalizeClassesList(headerAppearance.classes)} id="home">
    <Container className="text-center">
      <h1>Bem-vindo à {config.page_name}</h1>
      <p className="lead">{config.page_description}</p>
    </Container>
  </header>
);