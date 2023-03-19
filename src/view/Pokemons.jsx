import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonsName, getPokemons } from "../components/MyApi";


const Pokemons = () => {
  const navigate = useNavigate();
  const [poke, setPoke] = useState(null);

  const params = useParams();

  const regresar = () => {
    navigate("/");
  };

  const getList = async () => {
    const data = await getPokemons();
    return data.results;
  };

  useEffect(() => {
    const getPkmn = async () => {
      console.log("capture", params.capture);
      if (params.capture === "random") {
        const pokemons = await getList();
        const randomPokemon =
          pokemons[Math.floor(Math.random() * pokemons.length)];
        const data = await getPokemonsName(randomPokemon.name);
        setPoke(data);
      } else {
        const data = await getPokemonsName(params.capture);
        setPoke(data);
      }
    };

    getPkmn();
  }, [params.capture]);

  return (
    <div className="result">
      <Row>
        <Col>
          <Container>
            <Button variant="primary" onClick={regresar} className="back">
              {" "}
              Regresar{" "}
            </Button>
            {!poke && <span>loading</span>}
            {poke && (
              <Card style={{ width: '18rem' }} className="bg-dark text-white">
                <Card.Img variant="top" src={poke.sprites.front_default} />
                <Card.Body>
                  <Card.Title className="text-center">{poke.name}</Card.Title>
                </Card.Body>
              </Card>
            )}
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Pokemons;
