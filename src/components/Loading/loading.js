import React from "react";
import { Logo } from "../assets";

function Loading() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <img src={Logo} alt="" className="fixed z-[-50]" />
      <div className="loadingio-spinner-eclipse-uc1df5ob9cl">
        <div className="ldio-h1glf9mxz2q">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
