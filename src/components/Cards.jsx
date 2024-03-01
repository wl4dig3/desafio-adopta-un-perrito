import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Tags from './Tags';

function Cards({img="http://placekitten.com/g/200/300", title="titulo", description="descripcion", textoBadge="prueba badge", colorBadge="#d8c9d9"}) {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags texto={textoBadge} color={colorBadge} />
      </Card.Body>
    </Card>
  )
}

Cards.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    textoBadge: PropTypes.string,
    colorBadge: PropTypes.string,
}

export default Cards
