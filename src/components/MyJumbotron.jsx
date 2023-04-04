// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Component } from "react";

// class MyJumbotron extends Component {
//     render() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <h1>Welcome to Epic Bookstore!</h1>
//           <p>where all your lectures are EPIC!</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
// };

//export default MyJumbotron;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyJumbotron = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Welcome to Epic Bookstore!</h1>
          <p>where all your lectures are EPIC!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyJumbotron;
