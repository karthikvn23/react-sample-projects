import React, { Component } from 'react';

class Users extends React.Component {
    render() {
        return (
                <ol>
                    {this.props.profiles.map(
                        (profile) => (
                            <li key={profile.userID}>
                                <div className='users'>
                                    <p>{this.props.users[profile.userID].name}</p>
                                </div>
                                <div className='movies'>
                                    <p>{
                                        this.props.movies[profile.favoriteMovieID].name
                                    }</p>
                                </div>
                            </li>
                        )
                    )}
                </ol>
        );
    }
}

export default Users