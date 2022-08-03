import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Sayur() {
  return (
    <div className='container mt-4'>
        <div className="row">
            <div className="col-sm-3">
            <Card className="p-5">
      <Card.Img variant="top" src="/p1.png" height={100} alt="haha"/>
      <Card.Body>
        <Card.Title>Sawi</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
            <Card className="p-5">
      <Card.Img variant="top" src="/p6.png" height={100} alt="hehe"/>
      <Card.Body>
        <Card.Title>Kentang</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
            <Card className="p-5">
      <Card.Img variant="top" src="/p2.png" height={100} alt="selada" />
      <Card.Body>
        <Card.Title>Selada</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 
            </div>
            <div className="col-sm-3">
    <Card className="p-5">
      <Card.Img variant="top" src="/p3.png" height={100} alt="brocoli" />
      <Card.Body>
        <Card.Title>Brocolli</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-danger fw-bold">Rp.6.000 / kg</ListGroup.Item>
      </ListGroup>
    </Card> 

            </div>
        </div>
    </div>
  );
}

export default Sayur;