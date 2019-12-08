import React from 'react';
import HomePage from './HomePage/HomePage';
import './App.css';

const firebase = require('firebase');

debugger;
if (!global.sureRealJQ) {
	debugger;
	global.sureRealJQ = require("jquery")
}

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			posts: null
		};
	}

	render() {
		return (
			<div className="app-container">
				<HomePage
					posts={this.state.posts}
					newPost={this.newPost}
					updateFireBaseDB={this.updateFireBaseDB}
				></HomePage>
			</div>
		);
	}

	componentDidMount = () => {
		firebase
			.firestore()
			.collection('posts')
			.onSnapshot(serverUpdate => {
				const posts = serverUpdate.docs.map(_doc => {
					const data = _doc.data();
					data['id'] = _doc.id;
					return data;
				});
				this.setState({ posts: posts });
			});
	}


	updateFireBaseDB = async (postContent) => {
		var newPost = {
			body: postContent,
			likeCount: 0,
			comment: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		}
		debugger;
		const newFromDB = await firebase
			.firestore()
			.collection('posts')
			.add(newPost);
		await this.setState({ posts: [...this.state.posts, [newPost]] });
	}

}

export default App;