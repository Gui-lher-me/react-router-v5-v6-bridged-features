import React from "react";
import ReactDOM from "react-dom";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<p>TEST</p>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
