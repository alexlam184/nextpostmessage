import { useEffect, useState } from "react";
import * as React from 'react';
export default function IframeChild(){
  const [recievedMessage, setRecievedMessage] = useState("");

  let a = 0;
  const sendMessage = () => {
    window.parent.postMessage("Hi dad!"+String(a++), "*");
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      setRecievedMessage("Got this message from parent: " + e.data);
    });
  }, []);

  return (
    <div>
      <h2>Child iFrame</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      <p>{recievedMessage}</p>
    </div>
  );
};
