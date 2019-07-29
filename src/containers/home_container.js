import React from 'react';

import  {connect} from 'react-redux';
import {getArtistAll, getArtistList} from '../actions';
import {bindActionCreators} from 'redux';

import "../components/HomePage/home.css";
import ArtistList from '../components/ArtistList/artistList';

class HomeContainer extends React.Component {

 componentWillMount(){
        this.props.getArtistAll();
    }
    getKeywords = (e) => {
        const keywords =  e.target.value;
        this.props.getArtistList(keywords);   
    }

    render() {
        return (
            <div>
            <div className="main">
                <p className="Title">Search Your Artist</p>
                <input type="text" name="search" onChange={e=>this.getKeywords(e)}/>
                <br/>
            </div>
            <ArtistList artists={this.props.artists.artistList}/>
            </div>
        )
                
    }
}
function mapStateToProps(state){
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getArtistAll,getArtistList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);