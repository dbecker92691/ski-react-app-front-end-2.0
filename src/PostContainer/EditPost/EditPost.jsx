import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';





export default class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			postBody: props.post.body,
			postResort: props.post.resort
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle = (e) => {
		
		this.setState({
			modal: !this.state.modal
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name] : e.currentTarget.value
		});
	}

	editPost = (e) => {
		e.preventDefault();

		this.props.editPost(this.props.post.id, this.state.postBody, this.state.postResort);
	}


	render() {

		return(

			<div>
		        <Button color="danger" onClick={this.toggle}>Edit this post</Button>
		        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
		          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
		          <form onSubmit={this.editPost}>
		          <ModalBody>
		            
            		Resort: <input type="text" placeholder={this.props.post.resort} name="resort" onChange={this.handleChange} />
					Post: <input type="text" placeholder={this.props.post.body} name="body" onChange={this.handleChange}/>
		            
		          </ModalBody>
		          <ModalFooter>
		            <Button color="primary" onClick={this.toggle} type="submit">Edit</Button>{' '}
		            <Button color="warning" onClick={this.props.deletePost.bind(null, this.props.post.id)}>Delete Post</Button>
		            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
		          </ModalFooter>
		          </form>
		        </Modal>
	      	</div>
		)
	}

}