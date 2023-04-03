import React, { Component } from "react";
import CommentsList from "./CommentsList";
import ErrorBoundary from "./ErrorBoundary";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    console.log("componentDidMount called");
    this.getComments();
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.bookId !== this.props.bookId) {
  //       this.getComment();
  //     }
  //   }
  getComments = async () => {
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
        console.log(comments);
        this.setState({
          comments: comments,
        });
      } else {
        console.log("error in request");
      }
    } catch (error) {
      console.log("error!");
    }
  };

  //   this.props.selectedCard && this.state.comments
  render() {
    return (
      <>
        <ErrorBoundary>
          <CommentsList commentsList={this.state.comments} />
        </ErrorBoundary>
      </>
    );
  }
}

export default CommentArea;
