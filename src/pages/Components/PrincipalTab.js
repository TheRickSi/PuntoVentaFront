import { Button, ButtonGroup, Col, Container, Row, Tab } from "react-bootstrap";

export default function PrincipalTab() {
  return (
    <>
      <Container>
        <Row>
          <Button className="col" variant="warning">Quitar ultimo Producto (F1)</Button>
          <Button className="col" variant="danger">Cancelar (F2)</Button>
          <Button className="col" variant="success">Pagar (F3)</Button>
        </Row>
      </Container>
    </>
  );
}
