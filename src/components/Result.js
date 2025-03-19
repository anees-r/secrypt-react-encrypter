import React from "react";
import { useState } from "react";
import CopyIcon from "../assets/copy-icon.png";

const Result = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto bg-dark col-md-3 p-5 rounded shadow my-5 text-light">
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center test-center ">
        <h4>Results</h4>
        <code
          className="p-2 text-dark rounded"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          {result}
        </code>

        <div
          className="mt-2 d-flex flex-column justify-content-center align-items-center"
          onClick={handleCopy}
        >
          <img
            src={CopyIcon}
            alt="copy-icon"
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            className="mx-2 "
          />
          <p style={{ fontSize: "10px", marginTop: "2px", marginBottom: "0" }}>
            {copied ? "Copied!" : "Copy"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
