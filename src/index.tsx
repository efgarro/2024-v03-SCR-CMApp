import * as React from "react";

import { createRoot } from "react-dom/client";

const domNode = document.getElementById("app") as HTMLElement;
const root = createRoot(domNode);

import CMApp from "./CMApp"; // Import Content Management App

root.render(<CMApp name="Bella" />);