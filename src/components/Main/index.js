import "./index.css";
import "../../fixtures";
import ChatItem from "../ChatItem";
import { GPTResponse } from "../../response";
import { imageIcon } from "../../fixtures";

const Main = () => {
    return (
        <div className="main">
            <ChatItem imageLink={imageIcon} text={"여친 만드는 법"} />
            <ChatItem imageLink="/images/gpt.png" text={GPTResponse} />
        </div>
    );
};

export default Main;
