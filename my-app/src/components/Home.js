import React from 'react'
import '../App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            search: "",
        };
    }

    addPost = () => {
        this.setState({
            posts: [...this.state.posts, {
                title: 'Tugce',
                body: "Vatansever Gunduz"
            }]
        });
    }

    getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => (this.setState({ posts: data })
            ));
    }

    filterPost = (e) => {

        this.setState({
            search: e.target.value,
        })
    };

    render() {
        const filteredData = this.state.posts.filter(post => post.title.toLowerCase().includes(this.state.search.toLowerCase()));
        return (
            <div>
                <button onClick={this.addPost}>Add a new post</button>
                <button onClick={this.getPosts}>Get All Posts</button>
                <div className="search-bar-container">
                    <input value={this.state.search} className="search-bar" onChange={this.filterPost} placeholder="Search..."></input>
                </div>
                <ul>
                    {filteredData.map(post => (
                        <div key={post.id} className="post">
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home;
