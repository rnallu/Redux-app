import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArtistDetail} from '../actions';


class ArtistContainer extends React.Component {
    
    componentWillMount(){
        this.props.getArtistDetail(this.props.match.params.id);
    }

    getTemplate = (data) => (
        data ? (<div>
                <div className="img-container">
                <Link className="img-link" to="/">Back Home</Link>
                <img className="cover-img" src={`/images/${data.cover}`} alt={data.name}/>
                <p className="img-name">{data.name}</p>
                </div>
                <p className="img-text">{data.bio}</p>
                <p className="album-style"><strong>Style:</strong> {data.style}</p>
                <div className="album-container">
                    {data.albums.map((item,i)=>(
                        <img src={`/images/albums/${item.cover}`} alt={item.title} key={i}/>
                    ))}
                </div>
            </div>)
            : null
    )
    
    render(){
        return (
            <div>
                {this.getTemplate(this.props.artists.artistData)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        artists:state.artists
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({getArtistDetail},dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(ArtistContainer);