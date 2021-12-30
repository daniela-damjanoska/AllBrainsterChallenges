import React from 'react';
import artists from '../db';

export default function ArtistPage({
    match: {
        params: { id },
    },
}) {
    const currentArtist = artists.find(el => el.id === +id),
        { cover, name, bio, albums } = currentArtist;

    return (
        <div className="ArtistPage">
            <img src={`/images/covers/${cover}.jpg`} />
            <h3>{name}</h3>
            <p>{bio}</p>
            <div className="Albums">
                {albums.map(({ albumId, cover }) => (
                    <img key={albumId} src={`/images/albums/${cover}.jpg`} />
                ))}
            </div>
        </div>
    );
}
