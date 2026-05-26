// QRDonate.jsx

import "./QRDonate.css";
import QR from "../assets/qr.jpeg";

function QRDonate() {
  return (
    <div className="qr-wrapper">
      <div className="qr-card">
        {/* Header */}
        <div className="qr-header">
          <h2>Donate with QR</h2>
        </div>

        {/* Content */}
        <div className="qr-content">
          <div className="scan-title">
            <h5>Scan & Pay as Anonymous</h5>
            <div className="underline"></div>
          </div>

          {/* Warning Text */}
          <div className="warning-text">
            <h2>
              QR- कोड से दिए गए दान की रसीद नहीं मिलेगी।
            </h2>

            <p>
              Donation through QR-code receipt will not generated.
            </p>
          </div>

          {/* QR Image */}
          <div className="qr-image-box">
            <img
              src={QR}
              alt="QR Code"
              className="qr-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRDonate;