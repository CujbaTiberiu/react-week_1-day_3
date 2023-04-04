// import { Component } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import fantasy from '../data/fantasy.json'
// import history from '../data/history.json'
// import horror from '../data/horror.json'
// import romance from '../data/romance.json'
// import scifi from '../data/scifi.json'

// let allBooks =[]
// allBooks =allBooks.concat(fantasy,history,horror,romance,scifi)
// console.log(allBooks)

// class AllTheBooks extends Component{
//     render() {
//         return (
//             <Container>
//                 <Row>
//             { allBooks.map((book,i) => {
//                 return(
//                     <Col key={book.asin + i} xs={12} sm={6} md={4} lg={3} className="gy-2">
//             <Card>
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body className="d-flex flex-column justify-content-between">
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>
//           Category - <span className="fw-bold">{book.category}</span> <br /> Price - <span className="fw-bold">{book.price}$</span>
//         </Card.Text>
//         <Button variant="primary">Buy now!</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//     )})}
//     </Row>
//     </Container>
//         )
//     }
// }

// export default AllTheBooks

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

let allBooks = [];
allBooks = allBooks.concat(fantasy, history, horror, romance, scifi);
console.log(allBooks);

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {allBooks.map((book, i) => {
          return (
            <Col
              key={book.asin + i}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="gy-2"
            >
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    Category - <span className="fw-bold">{book.category}</span>{" "}
                    <br /> Price -{" "}
                    <span className="fw-bold">{book.price}$</span>
                  </Card.Text>
                  <Button variant="primary">Buy now!</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
