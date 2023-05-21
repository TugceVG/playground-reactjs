import "./closeFriend.css";

export default function CloseFriend({ closeFriend }) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={closeFriend.profilePicture} alt="" />
            <span className="sidebarFriendName">{closeFriend.username}</span>
        </li>
    )
}
