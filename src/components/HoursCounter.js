import React from 'react'

const defaultStyle = { color: '#fff' };

export default function HoursCounter(props) {
    const allSongs = props.playlists.reduce((songsArray, playlist) => songsArray.concat(playlist.songs), []);
		const totalDuration = allSongs.reduce((sum, song) => sum + song.duration, 0) 
		return (
			<div className="aggregate">
				<h2 style={{ ...defaultStyle }}>{totalDuration} hours</h2>
			</div>
		);
}
