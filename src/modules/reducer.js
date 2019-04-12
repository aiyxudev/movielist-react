const initState = { 
    movies: [],
    recommendations: []
}

const delMovie = ( arr, id) => arr.filter( movie => movie.id !== id);

const addMovie = ( fromarr, toarr, id) => toarr.concat(fromarr.filter(item => item.id === id)[0]);

const reducer  = ( state =initState, action) => {
    switch(action.type){
        case 'INIT':
            return {
                movies: action.payload.mylist, 
                recommendations: action.payload.recommendations
            }
        
        case "DELETE":
            return {
                movies: delMovie(state.movies, action.payload.id), 
                recommendations: addMovie( state.movies, state.recommendations, action.payload.id)
            }

        case "ADD": 
            return {
                movies: addMovie(state.recommendations, state.movies, action.payload.id), 
                recommendations: delMovie(state.recommendations,action.payload.id)
            }
        
        default:
            return state;

    }
}

export default reducer;

