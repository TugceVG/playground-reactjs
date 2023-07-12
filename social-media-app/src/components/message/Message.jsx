import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { format } from "timeago.js";
import "./message.scss";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Message({ own, message, user }) {

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src={own ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
