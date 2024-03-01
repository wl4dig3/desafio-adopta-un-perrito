import PropTypes from 'prop-types';
import { Badge } from "react-bootstrap";

function Tags({color="#d8fgh4", texto="badge"}) {
  return (
    <div>
        <Badge className='badge' bg={color}>
            {texto}
        </Badge>
    </div>
  )
}
Tags.propTypes = {
    color: PropTypes.string,
    texto: PropTypes.string,
    
}

export default Tags