import React, {Component} from 'react'
import moviesApi from './moviesApi'

class NowPlaying extends Component {
    constructor() {
        super()

        this.state = {
            movies: {}
        }
    }

    componentWillMount() {
        moviesApi.getNowPlaying()
            .then(movies => {
                console.log(movies)

                this.setState({
                    movies: movies
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return <ul>
            {
                this.state.movies.results ? this.state.movies.results.map(function (movie) {
                    return <li key={movie.id}>{movie.title}</li>
                }) : null
            }
        </ul>
    }
}

export default NowPlaying