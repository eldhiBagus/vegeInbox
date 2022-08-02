import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Buahlist() {
  return (
    <div className='container'>
        <h4 className="juduls text-center my-5">Our Products</h4>
        <div className="row">
            <div className="col-sm-3">
            <Card  className="p-5">
      <Card.Img variant="top" src="/p4.png" height={100}/>
      <Card.Body>
        <Card.Title>Mentimun</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
            <Card  className="p-5">
      <Card.Img variant="top" src="/p5.png" height={100}/>
      <Card.Body>
        <Card.Title>Wortel</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
            <Card className="p-5">
      <Card.Img variant="top" src="/p8.png" height={100} />
      <Card.Body>
        <Card.Title>Tomat</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
    <Card className="p-5">
      <Card.Img variant="top" src="/p7.png" height={100} />
      <Card.Body>
        <Card.Title>bawang bombay</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 

            </div>
        </div>
        <style jsx>{`
        .juduls {
          color:#7bfc03;
          text-shadow: 1px 1px 2px yellow;
        }
      `}</style>
    </div>
  );
}

export default Buahlist;