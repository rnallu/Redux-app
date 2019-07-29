import React from 'react';
import ArtistContainer from '../../containers/artist_container'
import './artistPage.css';

const ArtistPage = (props) => {
    return (
        <ArtistContainer {...props}/>
    )
}

export default ArtistPage;