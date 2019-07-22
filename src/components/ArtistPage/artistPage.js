import React from 'react';
import {Link} from 'react-router-dom';

const ArtistPage = (props) => {
    return (
        <div>
        <Link to="/">Back to Home</Link>
        <h1>Artist Page</h1>
        <h1>{props.match.params.id}</h1>
        </div>
    )
}

export default ArtistPage;