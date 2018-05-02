import React from 'react';

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: this.props.score
        };

        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore(e) {
        this.setState({
            score : this.state.score + 10
        })
    }

    decrementScore(e) {
        this.setState({
            score : this.state.score - 10
        })
    }

    render() {
        const styles ={
            player: {
                display: 'flex',
                padding: 10
            },
            name: {
                flex: '1'
            },
            playerScore: {
                width: 200
            },
            score: {
                padding: 20
            },
            button: {
                padding: 10
            }
        };

        return(
            <div style={styles.player}>
                <div style={styles.name}>
                    {this.props.name}
                </div>
                <div>
                    <div style={styles.playerScore}>
                        {/*
                        this.incrementScore.bind(this) & this.decrementScore.bind(this)
                        Bisa di shortcut pada constructor(Line 9 & 10)
                        */}
                        <button onClick={this.decrementScore} style={styles.button}>-</button>
                        <span style={styles.score}>{this.state.score}</span>
                        <button onClick={this.incrementScore} style={styles.button}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;