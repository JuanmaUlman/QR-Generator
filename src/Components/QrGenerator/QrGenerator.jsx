import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./QrGenerator.css";
import "animate.css";

import "bootstrap/dist/css/bootstrap.min.css";
const QrGenerator = () => {
  const [code, setCode] = useState("");
  const [button, setButton] = useState(false);

  const generateQrCode = () => {
    setButton(true);
  };

  return (
    <div className="container">
      <h1>QR Generator</h1>

      <div className="QrContainer">
        {button == true && code != "" ? (
          <QRCode
            value={code}
            className={`QrCode animate__animated ${
              button ? "animate__zoomIn" : ""
            }`}
          />
        ) : null}
      </div>

      <input
        type="text"
        onChange={(e) => {
          setCode(e.target.value);
          setButton(false);
        }}
      />

      <button onClick={generateQrCode}>QR Generator</button>
    </div>
  );
};

export default QrGenerator;
