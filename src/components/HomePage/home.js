import React from 'react';
import axios from 'axios';
import {Link, BrowserRouter as Router} from 'react-router-dom';

import "./home.css";

class Home extends React.Component {
    state = {
        artist:""
    }

    componentWillMount(){
        axios.get('http://localhost:3004/artists')
        .then(response => {
            this.setState({
                artist:response.data
            })
        })
    }

    render() {
        return !this.state.artist ? null :
         (
        <div className="main">
            <p className="Title">Search Your Artist</p>
            <input type="text" name="search"/>
            <br/>
        <div className="container">   
            {this.state.artist.map((val,i)=>(<div className="item-container" key={i}>
            <Router>
            <Link to={`/artist/${val.id}`}>
            <img className="item" src={process.env.PUBLIC_URL + `/images/${val.cover}`} alt={val.name} height="300px" width="auto"/>
            <div className="item-name">{val.name}</div>
            </Link></Router>
            </div>))}
        </div>
        </div>
        );
    }
}

export default Home;