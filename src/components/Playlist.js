import React from 'react'

export default function Playlist({playlist}) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <div className="card">
                    <img src={playlist.imageUrl} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h3>{playlist.name}</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam.</p>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                    {playlist.songs.map(song =>(
                        <li className="list-group-item" key={`${playlist.name}_${song.name}`}>
                            {song.name}
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    )
};