import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card" />
      <h3 className="card-header">{props.header}</h3>
      <h4>
        Image shown{" "}
        <span class="badge badge-pill badge-primary lg">{props.count}</span>{" "}
        {props.times}
      </h4>
      <div style={{ height: "200px", width: "200px", display: "block" }}>
        {props.children}
      </div>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={props.clicked}
      >
        {props.name}
      </button>

      <div />
    </>
  );
}

Card.defaultProps = {
  name: "Load image",
  header: "React Suspense Example",
  count: 0,
  times: "times"
};
