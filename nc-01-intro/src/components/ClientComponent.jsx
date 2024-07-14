"use client";
import React from "react";
import ServerComponent from "./ServerComponent";

const ClientComponent = ({ children }) => {
  console.log("This is client component");
  return (
    <div>
      ClientComponent
      {children}
      {/* <ServerComponent /> */}
      {/* Burada server component'i client component haline getirmiş oluruz. */}
    </div>
  );
};

export default ClientComponent;
