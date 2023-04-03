import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI
      return <h1>Oops! Something went wrong.</h1>;
    }
    // Otherwise, render the children
    return this.props.children;
  }
}

export default ErrorBoundary;
