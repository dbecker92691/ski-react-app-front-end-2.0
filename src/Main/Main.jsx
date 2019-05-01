import React, {Component} from 'react';
import NavBar from "./NavBar"
import PostList from "../PostContainer/PostList";



export default class Main extends Component {
	constructor(){
		super();
		this.state = {
			posts: []
		}
	}
	getPosts = async () => {
		const allPosts = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_SKI_POST}/`, {
			credentials: "include"
		})

		console.log(allPosts, "<---- all posts")

		const postResponse = await allPosts.json();
		console.log(postResponse, "<----- post response");
		return postResponse;
	}

	componentDidMount(){
		this.getPosts().then((posts) => {

			console.log(posts.posts, "<--- posts before setting state")

				this.setState({
				posts: posts.posts
			})
		})

		console.log(this.state.posts, "<---- posts state");
	}
	render(){
		return(
			<div>
			<NavBar />
				Ski Posts Here
				<PostList posts={this.state.posts} editPost={this.editPost} />
			</div>
		)
	}
}