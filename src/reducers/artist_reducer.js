export default function(state={},action){
    switch(action.type){
        case 'GET_ARTIST_ALL':
            return {...state, artistList:action.payload}
        case 'GET_ARTISTS':
            return {...state,artistList:action.payload}
        default:
            return state;
    }
}