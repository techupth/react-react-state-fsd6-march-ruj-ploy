import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const greetingMessageHandle = (message) => {
    setGreetingMessage(message);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={() => greetingMessageHandle("สวัสดี!")}>
          สวัสดี!
        </button>
        <button onClick={() => greetingMessageHandle("Hi!")}>Hi!</button>
        <button onClick={() => greetingMessageHandle("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
