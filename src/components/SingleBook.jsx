// import { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import CommentArea from "./CommentArea";

// class SingleBook extends Component {
//   state = {
//     selected: false,
//   };

//   selectedCard = () => {
//     // toggle del valore
//     this.setState({ selected: !this.state.selected });
//   };

//   render() {
//     return (
//       <>
//         <Card
//           className={`${
//             this.state.selected ? "shadow-lg border border-4 border-danger" : ""
//           }`}
//         >
//           {/*al click della card cambia lo stato di selected a vero e si verifica la prima condizone del ternary*/}
//           <Card.Img
//             variant="top"
//             src={this.props.book.img}
//             onClick={this.selectedCard}
//           />
//           <Card.Body className="d-flex flex-column justify-content-between">
//             <Card.Title>{this.props.book.title}</Card.Title>
//             <Card.Text>
//               Category -{" "}
//               <span className="fw-bold">{this.props.book.category}</span> <br />{" "}
//               Price - <span className="fw-bold">{this.props.book.price}$</span>
//             </Card.Text>
//             <Button variant="primary">Buy now!</Button>
//           </Card.Body>
//         </Card>
//         {this.state.selected && <CommentArea bookId={this.props.book.asin} />}
//       </>
//     );
//   }
// }

// export default SingleBook;

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const selectedCard = () => {
    // toggle del valore
    setSelected(!selected);
  };

  return (
    <>
      <Card
        className={`${
          selected ? "shadow-lg border border-4 border-danger" : ""
        }`}
      >
        {/*al click della card cambia lo stato di selected a vero e si verifica la prima condizone del ternary*/}
        <Card.Img variant="top" src={book.img} onClick={selectedCard} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Category - <span className="fw-bold">{book.category}</span> <br />{" "}
            Price - <span className="fw-bold">{book.price}$</span>
          </Card.Text>
          <Button variant="primary">Buy now!</Button>
        </Card.Body>
      </Card>
      {selected && <CommentArea bookId={book.asin} />}
    </>
  );
};

export default SingleBook;
