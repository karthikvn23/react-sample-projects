import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    value1;
    value2;
    value3;
    proposedAnswer;

    constructor(props){
        super(props)
        this.getNewValues()
    }

    state = {
        numCorrect: 0,
        numQuestions: 0
    }

    userClick = (buttonValue) => {
        this.setState({numQuestions: this.state.numQuestions + 1})

        if(buttonValue && ( this.proposedAnswer === this.value1 + this.value2 + this.value3))
            this.setState({numCorrect: this.state.numCorrect + 1})
        else if( !buttonValue && ( this.proposedAnswer !== this.value1 + this.value2 + this.value3))
            this.setState({numCorrect: this.state.numCorrect + 1})


        this.getNewValues()
    }

    getNewValues(){
        this.value1 = Math.floor(Math.random() * 100)
        this.value2 = Math.floor(Math.random() * 100)
        this.value3 = Math.floor(Math.random() * 100)
        this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="game">
                    <h2>Mental Math</h2>
                    <div className="equation">
                        <p className="text">{`${this.value1} + ${this.value2} + ${this.value3} = ${this.proposedAnswer}`}</p>
                    </div>
                    <button onClick={() => this.userClick(true)}>True</button>
                    <button onClick={() => this.userClick(false)}>False</button>
                    <p className="text">
                        Your Score: {this.state.numCorrect}/{this.state.numQuestions}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
