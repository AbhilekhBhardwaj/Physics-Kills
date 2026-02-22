import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

function getOrCreateRoot() {
  let el = document.getElementById("root");
  if (el) return el;
  if (document.body) {
    el = document.createElement("div");
    el.id = "root";
    document.body.appendChild(el);
    return el;
  }
  return null;
}

function mount() {
  const rootEl = getOrCreateRoot();
  if (!rootEl) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mount);
      return;
    }
    throw new Error("Cannot find or create root element");
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

mount();
