import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const genateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(response.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an Image Using Open Ai API</h3>
      <input
        className="app-input"
        placeholder="Type sometimes to generate an image ..."
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={genateImage}>Generate an Image</button>

      {result.length > 0 ? (
        <img className="result-image" src={result} alt="result" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
