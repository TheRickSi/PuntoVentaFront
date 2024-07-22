import { Navbar,Nav, Container } from "react-bootstrap";
export default function NavBarOp(){
    return(
        <Navbar expand="sm" className="sticky-top bg-info.bg-gradient mb-4">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3"/>
                <Navbar.Brand href="#home">Punto de Venta</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="mr-3">
                    <Nav className="mr-3">
                        <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
                        <Nav.Link href="#inventario">Inventario</Nav.Link>
                        <Nav.Link href="#usuario">Usuario</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}