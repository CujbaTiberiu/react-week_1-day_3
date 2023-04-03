import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.commentslist.map((comment) => (
          <ListGroup.Item key={comment.elementId}>
            {comment.comment}|{comment.rate}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
