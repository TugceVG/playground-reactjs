import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversations from "../../components/conversation/Conversations";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./messenger.css";

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id); //Id of jane who logged in the app
                setConversations(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/message/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMessages();
    }, [currentChat])
    console.log(messages);
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className="chatMenuInput" placeholder="Search for friends..." />
                        {conversations.map((conversation) => (
                            <div onClick={() => setCurrentChat(conversation)}>
                                <Conversations conversation={conversation} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? <>
                            <div className="chatBoxTop">
                                {messages.map((message) => (
                                    <Message message={message} own={message.sender === user._id} user={user} />
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea className="chatMessageInput" placeholder="Write something..." ></textarea>
                                <button className="chatSubmitButton">Send</button>
                            </div>
                        </> : <span className="noConversationText">Open a conversation to start a chat.</span>}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
