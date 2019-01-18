import React, { Component, Suspense, lazy } from "react";

import Spinner from "./Spinner";
import Button from "./Button";
const Image = lazy(() => import("./Image"));

class App extends Component {
  state = { showImage: false };

  showImage = () => {
    this.setState({ showImage: true });
  };

  render() {
    console.log(this.props, this.state);
    let content;
    if (!this.state.showImage) {
      content = <Button clicked={this.showImage} />;
    } else {
      content = (
        <Suspense fallback={<Spinner />}>
          <Image />
        </Suspense>
      );
    }
    return <div className="container">{content}</div>;
  }
}

export default App;
