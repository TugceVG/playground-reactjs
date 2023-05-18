import Post from "../post/Post.jsx";
import Share from "../share/Share.jsx";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) =>
                    <Post key={p.id} post={p} />
                )}
            </div>
        </div>
    )
}
