import React from 'react'

const defaultStyle = { color: '#fff' };

export default function PlaylistCounter(props) {
    return (
        <div className="aggregate" >
				<h2 style={{ ...defaultStyle }}>{props.playlists.length} playlists</h2>
			</div>
    );
}
