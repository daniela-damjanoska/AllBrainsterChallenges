import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="ErrorPage">
            <h2>Error 404</h2>
            <p>
                You reached a dead end. Go back to{' '}
                <Link to="/" className="link">
                    Homepage
                </Link>
            </p>
        </div>
    );
}
