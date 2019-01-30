import React, { Component, Suspense, lazy } from "react";

import Spinner from "./Spinner";
import Card from "./Card";
const Image = lazy(() => import("./Image"));

class App extends Component {
  state = { load: false, show: true, count: 0 };

  loadImage = () => {
    this.setState({ load: true });
    this.clickCount();
  };

  showImage = () => {
    this.setState({ show: !this.state.show });
    !this.state.show && this.clickCount();
  };

  clickCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { count, show } = this.state;
    let content;
    if (!this.state.load) {
      content = <Card {...this.props} clicked={this.loadImage} />;
    } else {
      content = (
        <Card
          clicked={this.showImage}
          name={show ? "Hide image" : "Show image"}
          count={count}
          times={count === 1 ? "time" : "times"}
        >
          {show && (
            <Suspense fallback={<Spinner />}>
              <Image />
            </Suspense>
          )}
        </Card>
      );
    }
    return <div className="container">{content}</div>;
  }
}
export default App;
