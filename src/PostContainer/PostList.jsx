import React from 'react';
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';






const PostList = (props) => {
	const posts = props.posts.map((post) => {

		console.log(post.user_id.username, "<---- mapped post")
		return(
			<div key={post.id}>
				<CardColumns>
					<Card body outline color="info" className="text-center" style={{width: "25rem", hight: "25rem"}} id="post-card">
						<CardTitle>{post.user_id.username}</CardTitle>
						<CardText>{post.body}</CardText>
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