// import { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import SingleBook from "./SingleBook";
// import Form from "react-bootstrap/Form";

// class BookList extends Component {
//   state = {
//     search: "",
//     filteredBooks: this.props.books,
//   };

//   funcSearch = (e) => {
//     const search = e.target.value;
//     const filteredBooks = this.props.books.filter((book) =>
//       book.title.toLowerCase().includes(search.toLowerCase())
//     ); //toLowerCase su entrambi cosi sicuramente non sarà case sensitive
//     this.setState({ search, filteredBooks });
//   };
//   render() {
//     const { filteredBooks } = this.state;
//     //const {book} = this.props
//     return (
//       <Container>
//         <Form.Group className="mb-3">
//           <Form.Label className="fs-2 mt-3">Search a book</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Search a book"
//             value={this.state.search} //prende il valore dell'input
//             onChange={this.funcSearch} //al cambio di valore scatta funcSearch che filtra e renderizza i libri in base alle key scritte
//           />
//         </Form.Group>
//         <Row>
//           {filteredBooks.map((book) => {
//             return (
//               <Col
//                 key={book.asin}
//                 xs={12}
//                 sm={6}
//                 md={4}
//                 lg={3}
//                 className="gy-2"
//               >
//                 <SingleBook book={book} />
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default BookList;

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const funcSearch = (e) => {
    const search = e.target.value;
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearch(search);
    setFilteredBooks(filteredBooks);
  };

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label className="fs-2 mt-3">Search a book</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search a book"
          value={search}
          onChange={funcSearch}
        />
      </Form.Group>
      <Row>
        {filteredBooks.map((book) => {
          return (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="gy-2">
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
