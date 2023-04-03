import React, { useState } from "react";
import PriceList from "./components/PriceList"
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
    <div className="container mx-auto">
      <PriceList />
    </div>
    <Footer />
    </>
  )
}