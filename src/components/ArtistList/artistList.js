import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props) => {

    return !props.artists ? null :
    (
        
   <div className="main">
       <p className="Title">Search Your Artist</p>
       <input type="text" name="search"/>
       <br/>
    <div className="container">   
        {props.artists.map((val,i)=>(<div className="item-container" key={i}>
        <Link to={`/artist/${val.id}`}>
        <img className="item" src={process.env.PUBLIC_URL + `/images/${val.cover}`} alt={val.name} height="300px" width="auto"/>
        <div className="item-name">{val.name}</div>
        </Link>
        </div>))}
    </div>
   </div>
   );
}

export default ArtistList;