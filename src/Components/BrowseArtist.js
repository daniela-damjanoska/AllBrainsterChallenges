import React from 'react';
import { Link } from 'react-router-dom';

export default function BrowseArtist({ id, img, artist }) {
    return (
        <Link to={`/ArtistPage/${id}`} className="Artist">
            <img src={`./images/covers/${img}.jpg`} alt="" />
            <span>{artist}</span>
        </Link>
    );
}
