import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ItemContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const getProducts = async () => {
    const response = await fetch('/products.json');
    const products = await response.json();
    const filteredProducts = products.filter(product => product.category === id);
    setItems(filteredProducts.length > 0 ? filteredProducts : products);
  };

  useEffect(() => {
    getProducts();
  }, [id]);


  return (
    <Container fluid className='mt-4 mx-auto max-width'>
      <Row>
        {items.map(item => (
          <Col key={item.id} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>Precio ${item.price}</Card.Text>
                <button type="button" className="btn">
                <Link to={`/item/${item.id}`} class='linkscolor'>Informacion</Link>
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
 }

 export default ItemContainer;