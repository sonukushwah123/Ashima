import React from "react";
import { Link } from "react-router-dom";

const DownloadButton = () => {
  return (
    <Link to="/brochurepage"  alt="">
      <button className="download">Download</button>
    </Link>
  );
};

export default DownloadButton;  
