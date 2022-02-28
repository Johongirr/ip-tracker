import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true };
  }
  componentDidCatch(err, errInfo) {
    console.log({ err, errInfo });
  }
  render() {
    if (this.state.hasError) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return (
        <div className="error">
          <h1 className="error__title">
            You've provided wrong information, Please provide valid IP address
            or domain :)
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}
