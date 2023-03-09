import './App.css';
import React from "react";
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => (this.setState({ posts: data })
      ))
    console.log(this)
  };

  render() {
    return (
      < div className="posts">
        <h1 className="header-title">Posts</h1>
        <Home />
        {/* <button onClick={this.getPosts}>Get Posts</button>
        <div className="posts">
          {this.state.posts.map(post => (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    )
  }
}


export default App;
