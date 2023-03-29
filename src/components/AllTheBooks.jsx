import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

let allBooks = fantasy.concat(history,horror,romance,scifi)
console.log(allBooks)

class AllTheBooks extends Component{
    render() {
        return (
            <Container>
                <Row>
            { allBooks.map(book => { 
                return(         
                    <Col key={book.asin} xs={12} md={4} lg={3} className="gy-2">
            <Card>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Category - {book.category} <br /> Price - {book.price}$
        </Card.Text>
        <Button variant="primary">Buy now!</Button>
      </Card.Body>
    </Card>
    </Col>
    )})} 
    </Row>
    </Container>
        )
    }
}

export default AllTheBooks