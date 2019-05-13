import React from 'react';
import EditPost from './EditPost/EditPost'
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import '../App.css';



// At some point figure out how to access "username" via "user_id"


const PostList = (props) => {
	const posts = props.posts.map((post, i) => {

		console.log(post.user_id, "<---- mapped post")
		return(
			<div className="resort-post-card" key={i}>
				<CardColumns xs="6" sm="4">
					<Card body outline color="info" className="text-center" style={{width: "25rem", hight: "25rem"}} id="post-card" key={post.id}>
						<CardTitle>User: {props.currentUser.username}</CardTitle>
						<CardText>Resort: {post.resort}</CardText>
						<CardText>{post.body}</CardText>
						<EditPost post={post} editPost={props.editPost} deletePost={props.deletePost}/>
					</Card>
				</CardColumns>
			</div>
		)
	})

	return(
		<div>
			{posts}
		</div>
	)
}



export default PostList;