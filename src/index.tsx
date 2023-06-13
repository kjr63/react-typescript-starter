import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

//import {createRoot} from "react-dom/client";

//const container = document.getElementById("root") as HTMLElement;
//const root = createRoot(container!); // createRoot(container!) if you use TypeScript
//root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
