import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        }
        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((friend) => onlineUsers.includes(friend._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="chatOnline">
            {onlineFriends.map((onlineFriend) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(onlineFriend)}>
                    <div className="chatOnlineImgContainer">
                        <img className="chatOnlineImg" src={onlineFriend ? PF + onlineFriend.profilePicture : PF + "person/noAvatar.png"} alt="" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{onlineFriend?.username}</span>
                </div>
            ))}
        </div>
    )
}
