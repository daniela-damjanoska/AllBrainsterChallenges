import React from 'react';
import BrowseArtist from './BrowseArtist';
import artists from '../db';

export default function Browse() {
    return (
        <div className="Browse">
            <h2>Browse the artists</h2>
            {artists.map(({ id, name, cover }) => (
                <BrowseArtist key={id} img={cover} artist={name} id={id} />
            ))}
        </div>
    );
}
