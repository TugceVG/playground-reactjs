import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

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
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages(prev => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", users => {
            setOnlineUsers(user.followings.filter((following) => users.some((user) => user.userId === following)));
        });
    }, [user]);

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
    // console.log(messages);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

        const receiverId = currentChat.members.find((member) => member !== user._id);

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage
        })

        try {
            const res = await axios.post("/message", message);
            setMessages([...messages, res.data]);
            setNewMessage("")
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className="chatMenuInput" placeholder="Search for friends..." />
                        {conversations.map((conversation) => (
                            <div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
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
                                    <div ref={scrollRef}>
                                        <Message message={message} own={message.sender === user._id} user={user} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="Write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                >

                                </textarea>
                                <button
                                    className="chatSubmitButton"
                                    onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            </div>
                        </> : <span className="noConversationText">Open a conversation to start a chat.</span>}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline
                            onlineUsers={onlineUsers}
                            currentId={user._id}
                            setCurrentChat={setCurrentChat}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
