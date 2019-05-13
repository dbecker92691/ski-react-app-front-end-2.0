import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';







export default class NewPost extends Component {
	constructor(props){
		super(props);
		this.state = {
			resort: '',
			body: '',
			id: ''
		}
	}

	createPost = (e) => {
		/* when create post is clicked page resets and doesn't create post */
		console.log('creating your post')
		e.preventDefault();

		document.getElementById("newPostForm").reset()
		this.props.createPost(this.state);
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name] : e.currentTarget.value
		})
	}

    render(){
        return(
            <div>
                <Form onSubmit={this.createPost} id="newPostForm">
			        <FormGroup>
			          <Label for="exampleEmail">Resort</Label>
			          <Input type="text" name="resort" id="resortBody" placeholder="Where were you at?" onChange={this.handleChange} />
			        </FormGroup>
			        <FormGroup>
			          <Label for="examplePassword">Post</Label>
			          <Input type="text" name="body" id="postBody" placeholder="What's on your mind?" onChange={this.handleChange}/>
			          <Button type="submit">Post your thoughts!</Button>
			        </FormGroup>
			    </Form>
            </div>
        )
    }
}