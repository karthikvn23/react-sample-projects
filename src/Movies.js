import React, { Component } from 'react';

class Movies extends React.Component {
    render() {
        let moviesKeys = Object.keys(this.props.movies);
        return (
            moviesKeys.map(
                (movieId) => (
                    <div>
                        <h2>{this.props.movies[movieId].name}</h2>
                        <p>Liked By:</p>
                        <div className='users'>
                            <ul key={movieId}>
                            {
                                this.props.profilesByMovieId[movieId].map(
                                    (profile) => {
                                        return(
                                            <div>
                                                <ol>
                                                    <li key={this.props.users[profile.userID].id}>
                                                        {this.props.users[profile.userID].name}
                                                    </li>
                                                </ol>
                                            </div>
                                        );
                                    }
                                )
                            }
                            </ul>
                        </div>
                    </div>
                )
            )
        );
    }
}

export default Movies