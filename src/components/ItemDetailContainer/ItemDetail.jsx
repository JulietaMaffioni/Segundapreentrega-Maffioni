import React from 'react'; 
import Card from 'react-bootstrap/Card';

function ItemDetail({ detail }) { 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={detail.image} /> 
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title> 
        <Card.Text>
          <p>{detail.info}</p> 
        </Card.Text>
        <button className="btn">Agregar al carrito</button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
