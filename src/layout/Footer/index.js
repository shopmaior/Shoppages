import { Container, Row, Col } from 'reactstrap';
import normalizeClassesList from '../../../utils/normalizeClassesList';

export default ({ config, footerAppearance }) => (
  <footer className={`${normalizeClassesList(footerAppearance.classes)} py-5`} >
    <Container>
      <p className="m-0 text-center text-white">Copyright &copy; {config.page_name} 2019</p>
    </Container>
  </footer>
);