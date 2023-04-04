// import React, { Component } from "react";
// import { Button, ListGroup } from "react-bootstrap";

// class SingleComment extends Component {
//   deleteComment = async (asin) => {
//     try {
//       let response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/comments/" + asin,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1MjQyMzYsImV4cCI6MTY4MTczMzgzNn0.YLH4QlKTTzuOdld44CoLeeAvEASUMnx6FxtzocdmucQ",
//           },
//         }
//       );
//       if (response.ok) {
//         alert("Comment was deleted successfully!");
//       } else {
//         alert("Error - comment was NOT deleted!");
//       }
//     } catch (error) {
//       alert("Error - comment was NOT deleted!");
//     }
//   };

//   render() {
//     const { comment } = this.props;
//     return (
//       <ListGroup.Item className="d-flex justify-content-around">
//         {comment.comment} | {comment.rate}
//         <Button
//           variant="danger"
//           className="ml-2"
//           onClick={() => this.deleteComment(comment._id)}
//         >
//           Delete
//         </Button>
//       </ListGroup.Item>
//     );
//   }
// }

// export default SingleComment;

import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1MjQyMzYsImV4cCI6MTY4MTczMzgzNn0.YLH4QlKTTzuOdld44CoLeeAvEASUMnx6FxtzocdmucQ",
          },
        }
      );
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {comment.comment} | {comment.rate}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
