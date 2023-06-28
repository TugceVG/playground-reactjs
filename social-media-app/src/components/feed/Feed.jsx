import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Post from "../post/Post.jsx";
import Share from "../share/Share.jsx";
import { AuthContext } from "../../context/AuthContext.js";
import "./feed.scss";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = username
                    ? await axios.get("/posts/profile/" + username)
                    : await axios.get("/posts/timeline/" + user._id);
                setPosts(
                    res.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [username, user._id]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username === user.username) && <Share />}
                {posts?.map((p) =>
                    <Post key={p._id} post={p} />
                )}
            </div>
        </div>
    )
}
