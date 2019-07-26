import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './artistPage.css';

class ArtistPage extends React.Component {
    state = {
        detail:""
    }
    componentWillMount(){
        return axios.get(`http://localhost:3004/artists/${this.props.match.params.id}`)
        .then(response => this.setState({
            detail:response.data
        })) ;
    }

    render(){
        return !this.state.detail ? null :
        (<div>
                <div className="img-container">
                <Link className="img-link" to="/">Back Home</Link>
                <img className="cover-img" src={`/images/${this.state.detail.cover}`} alt={this.state.detail.name}/>
                <p className="img-name">{this.state.detail.name}</p>
                </div>
                <p className="img-text">{this.state.detail.bio}</p>
                <p className="album-style"><strong>Style:</strong> {this.state.detail.style}</p>
                <div className="album-container">
                    {this.state.detail.albums.map((item,i)=>(
                        <img src={`/images/albums/${item.cover}`} alt={item.title} key={i}/>
                    ))}
                </div>
            </div>)
    }
}

export default ArtistPage;