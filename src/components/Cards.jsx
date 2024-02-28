import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

function Cards({img="http://placekitten.com/g/200/300", title="titulo", description="descripcion", btntitle="boton"}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">{btntitle}</Button>
      </Card.Body>
    </Card>
  )
}

Cards.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btntitle: PropTypes.string,
}

export default Cards
