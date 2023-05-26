import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({ profile }) {

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
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Luxembourg</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Turkey</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Married</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={PF + "person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
