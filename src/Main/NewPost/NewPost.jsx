import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';







export default class NewPost extends Component {
	constructor(props){
		super(props);
		this.state = {
			resort: '',
			body: '',
			id: '',
			modal: false
		}
	}

	toggle = () => {

		this.setState({
			modal: !this.state.modal
		})
	}

	createPost = (e) => {
		/* new post doesn't show up until page is reset? */
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
            	<Button color="danger" onClick={this.toggle} id="new-post-button">Post Something!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="new-post-modal">
                	<ModalHeader toggle={this.toggle}>New Post</ModalHeader>
                	<form id="newPostForm" onSubmit={this.createPost}>
                		<ModalBody>
                			Resort: <input type='text' name="resort" placeholder="Resort" onChange={this.handleChange} />
                			Post: <input type='text' name="body" placeholder="What's on your mind?" onChange={this.handleChange} />
                		</ModalBody>
                		<ModalFooter>
                			<Button color="primary" onClick={this.toggle} type="submit">Post it!</Button>
                			<Button color="secondary" onClick={this.toggle}>Nevermind</Button>
                		</ModalFooter>
                	</form>
                </Modal>
            </div>
        )
    }
}


