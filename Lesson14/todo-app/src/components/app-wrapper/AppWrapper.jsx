import { Component } from "react";

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Wrapper Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger m-4 p-4">
          <h4>Something went wrong...</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppWrapper;
