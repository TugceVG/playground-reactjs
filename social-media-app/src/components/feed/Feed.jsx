import Post from "../post/Post.jsx";
import Share from "../share/Share.jsx";
import "./feed.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts/timeline/646e2f85f59969e2b0722899");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts?.map((p) =>
                    <Post key={p._id} post={p} />
                )}
            </div>
        </div>
    )
}
