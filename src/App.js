import React, { Component } from 'react';
import Playlist from './components/Playlist';
import Filter from './components/Filter';
import HoursCounter from './components/HoursCounter';
import PlaylistCounter from './components/PlaylistCounter';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const defaultStyle = { color: '#fff' };

const fakeServerData = {
	user: {
		name: 'Alejandro',
		playlists: [
			{
				name: 'MadeUp',
				songs: [
					{name: 'Beat it', duration: 2},
					{name: 'Something', duration: 2},
					{name: 'Another one', duration: 2},
			]},
			{
				name: 'Feels',
				songs: [
					{name: 'Young blood', duration: 2},
					{name: 'Hello', duration: 2},
					{name: 'Goodbye', duration: 2},
			]},
			{
				name: 'Chill',
				songs: [
					{name: 'Here', duration: 2},
					{name: 'Nowhere', duration: 2},
					{name: 'There', duration: 2},
			]},
			{
				name: 'Boom!',
				songs: [
					{name: 'Yeah!', duration: 2},
					{name: 'Nope', duration: 2},
					{name: 'Maybe', duration: 2},
			]},
		],
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			hasSignedIn: false,
			filterString: '',
		};
	}

	componentDidMount() {
		const token = new URLSearchParams(window.location.search).get('access_token');
		if (!token) return;
		fetch('https://api.spotify.com/v1/me', {
			headers: { 'Authorization': `Bearer ${token}`}
		})
			.then((response) => response.json())
			.then(data => this.setState({user: { name: data.display_name }, hasSignedIn: true}))
		
			fetch('https://api.spotify.com/v1/me/playlists', {
			headers: { 'Authorization': `Bearer ${token}`}
		})
			.then((response) => response.json())
			.then(data => this.setState({playlists: data.items.map(item => ({name: item.name, imageUrl: item.images[0].url, songs: []}))}))
	}

	render() {
		const playlistsToRender = this.state.user && this.state.playlists
			? this.state.playlists
				.filter(playlist => 
					playlist.name.toLowerCase()
						.includes(this.state.filterString.toLocaleLowerCase())
				)
			: [];

		return (
			<div className="App container bg-dark" 	>
				{this.state.user ?
				<div className>
						<h1 style={{ ...defaultStyle, fontSize: '54px' }}>
							{this.state.user.name}'s Playlist
						</h1>
						{this.state.playlists &&
						<div>
							<div className="row">
								<div className="col-xs-12 col-sm-6">
									<PlaylistCounter playlists={playlistsToRender} />
								</div>
								<div className="col-xs-12 col-sm-6">
								<HoursCounter playlists={playlistsToRender}/>
								</div>
							</div>
							<div className="mt-3 mb-4">
								<Filter onTextChange={text => this.setState({ filterString: text })} />
							</div>
							<div className="row">
								{playlistsToRender.map(playlist => 
									<Playlist key={playlist.name} playlist={playlist} />
								)}
							</div>
						</div>
						}
				</div>
				:
				<div>
					<button onClick={() => {
						window.location = 'http://localhost:8888/login'}} style={{padding: '20px', fontSize: '35px', marginTop: '20px'}}>
						Sign in
					</button>
				</div>
				}
			</div>
		);
	}
}

export default App;
