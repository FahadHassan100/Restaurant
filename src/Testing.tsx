import React, { useState } from "react";
import "./App.css";
const Testing = () => {
  const [showDiv, setShowDiv] = useState("showD");
  return (
    <div>
      <h2 className="showDiv">Heading Testing Area</h2>
      <button>Click to Fade</button>
    </div>
  );
};

export default Testing;
