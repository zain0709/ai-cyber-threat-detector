import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/predict", { input });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  const data = {
    labels: ["Normal", "Anomalous"],
    datasets: [
      {
        label: "Threat Probability",
        data: result !== null ? [1 - result, result] : [0, 0],
        borderWidth: 1,
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(255,99,132,0.4)"],
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI-Enhanced Cyber Threat Detector</h1>
      <textarea
        rows={4}
        cols={60}
        placeholder="Paste system log or network line..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Analyze</button>
      {result !== null && (
        <>
          <p>
            Result: {result === 1 ? "⚠️ Anomaly detected" : "✅ Normal traffic"}
          </p>
          <Line data={data} />
        </>
      )}
    </div>
  );
}

export default App;
