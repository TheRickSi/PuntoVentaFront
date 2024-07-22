import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import { useState, useCallback, useEffect } from "react";

import "react-barcode-scanner/polyfill";
import { BarcodeScanner } from "react-barcode-scanner";

export default function PrincipalTab() {
  const data = [
    { codigo: "7861038054266", nombre: "Tips Ambientador" },
    { codigo: "7509546063645", nombre: "Speed Stick" },
    // Otros datos...
  ];
  const [codebar, setCodebar] = useState(null);
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const addItemArticles = (newArticle) => {
    setArticles((oldArticle) => [
      ...oldArticle,
      { ...newArticle, cantidad: 1 },
    ]);
  };
  const addcantProduct = (item) => {
    const newArticles = articles.map((article) =>
      article.codigo === item.codigo
        ? { ...article, cantidad: article.cantidad + 1 }
        : article
    );
    setArticles(newArticles);
  };
  const handleSearch = useCallback(
    (searchTerm) => {
      if (searchTerm.length === 3 || searchTerm.length === 13) {
        const results = data.filter((item) => item.codigo.includes(searchTerm));

        if (searchTerm.length === 13 && results.length === 1) {
          if (!articles.some((article) => article["codigo"] === searchTerm)) {
            addItemArticles(results[0]);
          }
          setSearchResults([]);
          setCodebar(null);
        } else {
          setSearchResults(results);
        }
      }
    },
    [data]
  );
  useEffect(() => {
    if (codebar) {
      handleSearch(codebar.rawValue);
    }
  }, [codebar, handleSearch]);

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
            options={{ formats: ["ean_13"], delay: 2000 }}
            trackConstraints={{
              width: { min: 640, ideal: 1280 },
              height: { min: 480, ideal: 720 },
            }}
            onCapture={setCodebar}
            className="position-absolute z-n1 invisible me-0 px-0 w-75"
          />
        </Row>
        <Row className="mt-3">
          <SearchBar
            onSearch={handleSearch}
            codebarReaded={codebar}
            codebartoFind={setCodebar}
          />
          <ListGroup>
            {searchResults.map((item, index) => (
              <ListGroupItem key={index}>{item.nombre}</ListGroupItem>
            ))}
          </ListGroup>
        </Row>
        {articles.map((article, idx) => {
          return (
            <Row key={idx}>
              <Col>{article.codigo}</Col>
              <Col>{article.nombre}</Col>
              <Col>{article.cantidad}</Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
