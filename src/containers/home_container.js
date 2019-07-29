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

    render() {
        return (
            <ArtistList artists={this.props.artists.artistList}/>
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