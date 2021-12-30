import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to={'/'} exact className="Header">
                <img src="images/raw/Girls-Listen-Music_0.jpg" alt="" />
                <h1>MUSIC-DB</h1>
            </Link>
            <div className="Border"></div>
        </>
    );
}
