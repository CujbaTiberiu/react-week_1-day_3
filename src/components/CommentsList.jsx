import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.commentsList.map((comment, i) => (
          <ListGroup.Item key={comment.elementId + i}>
            {comment.comment}|{comment.rate}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
