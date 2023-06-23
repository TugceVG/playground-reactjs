import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Users } from "../../dummyData";
import Online from "../online/Online";
import { Unfollow, Follow } from "../../context/AuthActions";
import { AuthContext } from "../../context/AuthContext";
import "./rightbar.css";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({ user }) {

    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings?.includes(user?._id));

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(`/users/friends/${user._id}`);
                setFriends(friendList.data);
                // console.log(friendList)
            } catch (err) {
                console.log(err);
            }
        };
        if (user?._id) {
            getFriends();
        }
    }, [user]);

    useEffect(() => {
        setFollowed(currentUser.followings?.includes(user?._id))
    }, [currentUser, user?._id]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put("/users/" + user._id + "/unfollow", { userId: currentUser._id });
                dispatch(Unfollow(user._id));
            } else {
                await axios.put("/users/" + user._id + "/follow", { userId: currentUser._id });
                dispatch(Follow(user._id));
            }

            setFollowed(followed => !followed);
        } catch (err) { console.log(err) }
    }

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={PF + "gift.png"} className="birthdayImg" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src={PF + "ad.png"} className="rightbarAd" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => <Online key={user.id} user={user} />)}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <RemoveIcon /> : <AddIcon />}
                    </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend, index) => (
                        <Link key={index} to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
                            <div className="rightbarFollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
