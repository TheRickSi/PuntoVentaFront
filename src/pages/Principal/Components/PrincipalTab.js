import { Button, Col, Container, Row } from "react-bootstrap";
import { BarcodeScanner } from "react-barcode-scanner";
import "react-barcode-scanner/polyfill";
import { useState } from "react";
export default function PrincipalTab() {
  const [barcode, setBarcode] = useState("Nada aun");
  let snap = async (barcode) => {
    console.log(barcode);
    setBarcode(barcode.rawValue);
  };
  return (
    <>
      <Container>
        <Row>
          <Button className="col" variant="warning">
            Quitar ultimo (F1)
          </Button>
          <Button className="col" variant="danger">
            Cancelar (F2)
          </Button>
          <Button className="col" variant="success">
            Pagar (F3)
          </Button>
        </Row>
        <Row>
          <BarcodeScanner
            options={{ formats: ["ean_13"], delay: 1000 }}
            trackConstraints={{
              width: { min: 640, ideal: 1280 },
              height: { min: 480, ideal: 720 },
            }}
            onCapture={snap}
            className="position-absolute z-n1 invisible me-0 px-0 w-75"
          />
        </Row>
        <Row className="mt-3">
          <Col></Col>
        </Row>
        <p>{barcode}</p>
      </Container>
    </>
  );
}
