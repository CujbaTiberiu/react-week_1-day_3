// class AddComment extends Component {
//   state = {
//     singleComment: {
//       comment: "",
//       rate: 1,
//       elementId: this.props.bookId,
//     },
//   };

//   sendComment = async () => {
//     try {
//       let resp = await fetch(
//         `https://striveschool-api.herokuapp.com/api/comments/`,
//         {
//           method: "POST",
//           body: JSON.stringify(this.state.singleComment),
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1NTE2NjUsImV4cCI6MTY4MTc2MTI2NX0.FzGw6HCs7CieaCZyBVY9AZdph-DVTunPrFrEMFJs39Q",
//           },
//         }
//       );
//       if (resp.ok) {
//         alert("Comment submited correctly!");
//         this.setState({
//           singleComment: {
//             comment: "",
//             rate: 1,
//             elementId: "",
//           },
//         });
//       } else {
//         console.log("error in call");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Form
//         onSubmit={(e) => {
//           e.preventDefault();
//           this.sendComment();
//         }}
//       >
//         <Form.Group className="mb-3">
//           <Form.Label>Insert comment..</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Insert your comment.."
//             required
//             value={this.state.singleComment.comment}
//             onChange={(e) => {
//               this.setState({
//                 singleComment: {
//                   ...this.state.singleComment,
//                   comment: e.target.value,
//                 },
//               });
//             }}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Rate book</Form.Label>
//           <Form.Select
//             required
//             value={this.state.singleComment.rate}
//             onChange={(e) => {
//               this.setState({
//                 singleComment: {
//                   ...this.state.singleComment,
//                   rate: e.target.value,
//                 },
//               });
//             }}
//           >
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Form.Select>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Book Id</Form.Label>
//           <Form.Control
//             placeholder={this.props.bookId}
//             disabled
//             value={this.state.singleComment.elementId}
//             onChange={(e) => {
//               this.setState({
//                 singleComment: {
//                   ...this.state.singleComment,
//                   elementId: e.target.value,
//                 },
//               });
//             }}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit!
//         </Button>
//       </Form>
//     );
//   }
// }
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddComment = (props) => {
  const [singleComment, setSingleComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.bookId,
  });

  const sendComment = async () => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(singleComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1NTE2NjUsImV4cCI6MTY4MTc2MTI2NX0.FzGw6HCs7CieaCZyBVY9AZdph-DVTunPrFrEMFJs39Q",
          },
        }
      );
      if (resp.ok) {
        alert("Comment submited correctly!");
        setSingleComment({
          comment: "",
          rate: 1,
          elementId: props.bookId,
        });
      } else {
        console.log("error in call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendComment();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Insert comment..</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insert your comment.."
          required
          value={singleComment.comment}
          onChange={(e) => {
            setSingleComment({
              ...singleComment,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rate book</Form.Label>
        <Form.Select
          required
          value={singleComment.rate}
          onChange={(e) => {
            setSingleComment({
              ...singleComment,
              rate: e.target.value,
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Id</Form.Label>
        <Form.Control
          placeholder={props.bookId}
          disabled
          value={singleComment.elementId}
          onChange={(e) => {
            setSingleComment({
              ...singleComment,
              elementId: e.target.value,
            });
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit!
      </Button>
    </Form>
  );
};

export default AddComment;
