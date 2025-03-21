import React from "react";
import { useState } from "react";
import EncryptIcon from "../assets/encrypt-icon.png";
import DecryptIcon from "../assets/decrypt-icon.png";
import Result from "./Result";
import CryptoJS from "crypto-js";

const Encrypter = () => {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  const handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
    setText("");
    setDecryptedText("");
    setEncryptedText(ciphertext);
  };

  const handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(text, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (!originalText) {
      alert("Invalid encrypted text! Please enter a valid encrypted string.");
      return;
    }
    setText("");
    setEncryptedText("");
    setDecryptedText(originalText);
  };

  return (
    <>
      <div className="container mx-auto col-md-3 p-5 rounded shadow my-5">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center test-center ">
          <input
            type="text"
            name="text"
            placeholder="Enter your text"
            style={{ borderRadius: "10px", width: "100%" }}
            className="px-2 py-1 border-dark"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="d-flex flex-row gap-2 mx-2 justify-content-between"
            style={{ width: "100%" }}
          >
            <button
              className="btn btn-dark"
              style={{ width: "100%" }}
              onClick={handleEncrypt}
            >
              <img
                src={EncryptIcon}
                alt="encrypt-icon"
                style={{ width: "20px", height: "20px" }}
                className="mx-2"
              />
              Encrypt
            </button>
            <button
              className="btn btn-dark"
              style={{ width: "100%" }}
              onClick={handleDecrypt}
            >
              <img
                src={DecryptIcon}
                alt="decrypt-icon"
                style={{ width: "20px", height: "20px" }}
                className="mx-2"
              />
              Decrypt
            </button>
          </div>
        </div>
      </div>

      {encryptedText && <Result result={encryptedText} />}
      {decryptedText && <Result result={decryptedText} />}
    </>
  );
};

export default Encrypter;
