import { useEffect, useState } from "react";
import { Header, Main, TextField } from "./components";
import "./reset.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
    const [chatMessages, setChatMessages] = useState([
        { isMine: true, message: "hello" },
        { isMine: false, message: "No" },
    ]);
    const [question, setQuestion] = useState("");

    const sendChat = (message) => {
        setChatMessages((s) => [...s, { isMine: true, message }]);
        socket.emit("chat", message);
    };

    useEffect(() => {
        socket.on("chat", (data) => {
            setChatMessages((s) => [...s, { isMine: false, message:data }]);
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <Main chatMessages={chatMessages} />
            <TextField sendChat={sendChat} setQuestion={setQuestion} />
        </div>
    );
}

export default App;
