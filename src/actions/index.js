import axios from 'axios';

const URL = "http://localhost:3004";

export function getArtistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`).then(response=>response.data)
    return {
        type: 'GET_ARTISTS',
        payload:request
    }
}

export function getArtistAll(){
    const request = axios.get(`${URL}/artists`).then(response=>response.data)
    return {
        type:'GET_ARTIST_ALL',
        payload:request
    }
}