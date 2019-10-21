import React, { Component } from 'react';
import './App.css';
import { all } from 'q';

const defaultStyle = { color: '#fff' };
const fakeServerData = {
	user: {
		name: 'Alejandro',
		playlists: [
			{ songs: [
				{name: 'Beat it', duration: 2},
				{name: 'Something', duration: 2},
				{name: 'Another one', duration: 2},
			]},
			{ songs: [
				{name: 'Young blood', duration: 2},
				{name: 'Hello', duration: 2},
				{name: 'Goodbye', duration: 2},
			]},
			{ songs: [
				{name: 'Here', duration: 2},
				{name: 'Nowhere', duration: 2},
				{name: 'There', duration: 2},
			]},
			{ songs: [
				{name: 'Yeah!', duration: 2},
				{name: 'Nope', duration: 2},
				{name: 'Maybe', duration: 2},
			]},
		],
	},
};

class PlaylistCounter extends Component {
	render() {
		return (
			<div
				style={{ width: '40%', display: 'inline-block' }}
				className="aggregate"
			>
				<h2 style={{ ...defaultStyle }}>{this.props.playlists.length} playlists</h2>
			</div>
		);
	}
}

class HoursCounter extends Component {
	render() {
		const allSongs = this.props.playlists.reduce((songsArray, playlist) => songsArray.concat(playlist.songs), []);
		const totalDuration = allSongs.reduce((sum, song) => sum + song.duration, 0) 
		console.log(allSongs);
		return (
			<div
				style={{ width: '40%', display: 'inline-block' }}
				className="aggregate"
			>
				<h2 style={{ ...defaultStyle }}>{totalDuration} hours</h2>
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
			<div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
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


class App extends Component {
	constructor() {
		super();
		this.state = { serverData: undefined };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ serverData: fakeServerData });
		}, 2000);
	}

	render() {
		return (
			<div className="App">
				{this.state.serverData ?
				<div>
					<h1 style={{ ...defaultStyle, fontSize: '54px' }}>
					{this.state.serverData.user.name}' Playlist
					</h1>
					<PlaylistCounter playlists={this.state.serverData && this.state.serverData.user.playlists} />
					<HoursCounter playlists={this.state.serverData && this.state.serverData.user.playlists}/>
					<Filter />
					<Playlist />
					<Playlist />
					<Playlist />
				</div>
				: <h1 style={defaultStyle}>Loading...</h1>
				}
			</div>
		);
	}
}

export default App;
