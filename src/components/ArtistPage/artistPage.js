import React from 'react';



const ArtistPage = (props) => {
    return (
        <div>
        <h1>Artist Page</h1>
        <h1>{props.match.params.id}</h1>
        </div>
    )
}

export default ArtistPage;