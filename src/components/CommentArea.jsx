import React, { Component } from "react";
import CommentsList from "./CommentsList";
//import ErrorBoundary from "./ErrorBoundary";

class CommentArea extends Component {
  state = {
    comments: null,
  };

  componentDidMount() {
    this.getComment();
  }

  getComment = async () => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1MjQyMzYsImV4cCI6MTY4MTczMzgzNn0.YLH4QlKTTzuOdld44CoLeeAvEASUMnx6FxtzocdmucQ",
          },
        }
      );
      if (resp.ok) {
        let comments = await resp.json();
        this.setState({
          comments: comments,
        });
        console.log(comments);
      } else {
        console.log("error in request");
      }
    } catch (error) {
      console.log("error!");
    }
  };

  render() {
    return (
      <>
        <CommentsList commentsList={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
