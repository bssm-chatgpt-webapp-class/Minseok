import "./index.css";
import "../../fixtures";
import ChatItem from "../ChatItem";
import { imageIcon } from "../../fixtures";

const Main = ({ chatMessages }) => {
    return (
        <div className="main">
            {chatMessages.map((item) => {
                return (
                    <>
                        {item.isMine ? (
                            <ChatItem
                                imageLink={imageIcon}
                                text={item.message}
                            />
                        ) : (
                            <ChatItem
                                imageLink="/images/gpt.png"
                                text={item.message}
                            />
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default Main;
