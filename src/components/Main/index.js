import "./index.css";
import "../../fixtures";
import ChatItem from "../ChatItem";
import { imageIcon } from "../../fixtures";

const Main = () => {
    return (
        <div className="main">
            <ChatItem imageLink={imageIcon} text={"코딩 잘하는법"} />
        </div>
    );
};

export default Main;
