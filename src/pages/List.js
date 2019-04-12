import React, { Component} from 'react'; 
import { connect } from 'react-redux';
import './List.css';



class List extends Component{
    deleteMovie = id => {
        this.props.onDel(id)
    } 

    addMovie = id => {
        console.log("trigger add")
        this.props.onAdd(id)
    }
    
    render() {
        return(
            <div>
                
                <h1> My Movies</h1>
                <div className="movies">
                {
                    this.props.movies.map( (movie) => 
                        <div className="movie"
                             key={movie.id}>
                            <p> {movie.title}</p>
                            <img src={movie.img}></img>
                            <button onClick={(id) => this.deleteMovie(movie.id)}> delete </button>
                        </div>
                    )
                }
                </div> 
                <br></br>
                <h1> My recommendations</h1>
                <div className="movies">
                {
                    this.props.recommendations.map( (movie) => 
                    <div className="movie"
                         key={movie.id}>
                        <p> {movie.title}</p>
                        <img src={movie.img}></img>
                        <button onClick={(id) => this.addMovie(movie.id)}> add </button>
                    </div>
                    )
                }
                </div>
            </div> 

        );
    }
    
}

const mapStateToProps = state => {
    console.log(state.movies)
    console.log( state.recommendations)
    return {
        movies: state.movies,
        recommendations: state.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (index) => dispatch({type: 'ADD', payload: {id: index}}),
        onDel: (index) => dispatch({type: 'DELETE', payload: {id: index}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List)