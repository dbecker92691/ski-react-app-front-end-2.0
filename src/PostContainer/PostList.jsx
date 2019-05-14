import React from 'react';
import EditPost from './EditPost/EditPost'
import { Card, CardTitle, CardText, CardColumns } from 'reactstrap';
import '../App.css';





const PostList = (props) => {
	const posts = props.posts.map((post, i) => {

		return(
			<div className="resort-post-card" key={i}>
				<CardColumns xs="6" sm="4">
					<Card body outline color="info" className="text-center" style={{width: "25rem", hight: "25rem"}} id="post-card" key={post.id}>
						<CardTitle>{props.currentUser.username} says:</CardTitle>
						<CardText>{post.resort}</CardText>
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