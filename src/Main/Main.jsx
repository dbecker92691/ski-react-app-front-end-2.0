import React, {Component} from 'react';
import NavBar from "./NavBar"
import PostList from "../PostContainer/PostList";
import NewPost from './NewPost/NewPost';



export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			posts: [],
			currentUser: this.props.currentUser
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

	createPost = async (formData) => {
		console.log(formData, "<--- new post form data");
		
		const postResponse = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_SKI_POST}/`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		console.log(postResponse, "<--- New Post Response");

		const parsedPostResponse = await postResponse.json();

		this.setState({
			posts: [...this.state.posts, parsedPostResponse]
		})
	}

	editPost = async (id, formData) => {
		console.log("Editing post " + id + " to have new text " + formData);

		const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_SKI_POST}/${id}`, {

			method: "PUT",
			credentials: "include",
			body: JSON.stringify({"body": formData}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedEditResponse = await response.json();

		this.setState({
			posts: this.state.posts.map((post) => {
				if(post.id === id){
					return parsedEditResponse;
				}else{
					return post;
				}
			})
		})
	}

	deletePost = async (id) => {
		await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_SKI_POST}/${id}`, {
			method: "DELETE",
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	render(){
		return(
			<div>
			<NavBar />
				Ski Posts Here
				<PostList posts={this.state.posts} editPost={this.editPost} deletePost={this.deletePost} currentUser={this.state.currentUser}/>
				<NewPost createPost={this.createPost} />
			</div>
		)
	}
}