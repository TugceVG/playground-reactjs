import axios from "axios";
import { useEffect, useState } from "react";
import "./conversations.scss";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Conversations({ conversation, currentUser }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser._id);

        //we try to reach friend detail in conversation
        const getUser = async () => {//we need friend detail so we are fetching data for friend information
            try {
                const res = await axios("/users?userId=" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="conversationImg" />
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
