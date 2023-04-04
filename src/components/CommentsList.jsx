// class
//import { Component } from "react";
// class CommentsList extends Component {
//   render() {
//     return (
//       <ListGroup>
//         {this.props.commentsList.map((comment, i) => (
//           <ListGroup.Item key={comment.elementId + i}>
//             {comment.comment}|{comment.rate}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     );
//   }
// }

import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentsList = ({ commentsList }) => (
  <ListGroup className="mt-2">
    {commentsList.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentsList;
