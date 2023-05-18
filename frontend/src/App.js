import { BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
