import { Tabs,Tab, Container } from "react-bootstrap";
import PrincipalTab from "./PrincipalTab";

export default function TabHandler(){
    return(
        <Container>
            <Tabs
            defaultActiveKey="ventas"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
                <Tab eventKey="ventas" title="Ventas">
                    <PrincipalTab/>
                </Tab>
            </Tabs>
        </Container>
    );
}