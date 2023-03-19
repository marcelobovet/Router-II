import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useEffect, useState } from "react";
import { getPokemons } from "../components/MyApi";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);
  const [capturePokemon, setCapturePokemon] = useState('');

  const getList = async () => {
    const data = await getPokemons();
  
    setListPokemons(data.results);
  };

  const buscar = () => {
    if (capturePokemon === "") {
      return alert("selecciona po");
    }
    navigate(`/Pokemons/${capturePokemon}`);
  };

  const onChangeData = (e) => {
    const data = e.target.value;
    setCapturePokemon(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="barra">
      <Container>
        <Row>
          <Col xs={9} md={6} lg={3}>
            <Form.Select aria-label="Seleccione" onChange={onChangeData} className="form">
              <option>Seleccionar</option>
              {listPokemons.map((list, index) => (
                <option value={list.name} key={index}>
                  {list.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={9} md={6} lg={3}>
            <Button variant="danger" onClick={() => buscar()} className="btn">
              {" "}
              Buscar{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
