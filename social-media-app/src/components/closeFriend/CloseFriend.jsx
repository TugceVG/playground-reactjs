import "./closeFriend.scss";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriend({ closeFriend }) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF + closeFriend.profilePicture} alt="" />
            <span className="sidebarFriendName">{closeFriend.username}</span>
        </li>
    )
}
