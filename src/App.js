/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import './App.css';

const defaultTextColor = '#fff';
const defaultStyle = { color: defaultTextColor };

class Aggregate extends Component {
	render() {
		return (
			<div
				style={{ width: '40%', display: 'inline-block' }}
				className="aggregate"
			>
				<h2 style={{ ...defaultStyle }}>Number text</h2>
			</div>
		);
	}
}

class Filter extends Component {
	render() {
		return (
			<div style={{ ...defaultStyle }}>
				<img src="" alt="" />
				<input type="text" />
			</div>
		);
	}
}

class Playlist extends Component {
	render() {
		return (
			<div style={{ ...defaultStyle, width: '25%' }}>
				<img src="" alt="" />
				<h3>Playlist Name</h3>
				<ul>
					<li>
						Song 1
					</li>
					<li>
						Song 2
					</li>
					<li>
						Song 3
					</li>
				</ul>
			</div>
		);
	}
}


function App() {
	return (
		<div className="App">
			<h1>Title</h1>
			<Aggregate />
			<Aggregate />
			<Filter />
			<Playlist />
			<Playlist />
		</div>
	);
}

export default App;
