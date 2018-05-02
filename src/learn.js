import React from "react";
import Players from "./players";
import Add from "./add";

class Learn extends React.Component {
    constructor(props) {
        super(props);
        const PLAYERS = [
            {id:1, name: 'S Hariara', score: 25},
            {id:2, name: 'Stepanus H', score: 15},
            {id:3, name: 'Stepanus Hariara', score: 10}
        ];

        this.state = {
            players: PLAYERS
        }
        this.onPlayerAdd = this.onPlayerAdd.bind(this);
    }

    onPlayerAdd(name){
        let curr_players = this.state.players;
        curr_players.push({id: curr_players.length + 1, name: name, score:10})
        this.setState({
            players : curr_players
        })
    }

    render() {
        const styles = {
            container: {
                padding: 60
            }
        };

        return (
            <div style={styles.container}>
                <h1>Learn react v1</h1>
                <Players players={this.state.players}/>
                <Add onAdd={this.onPlayerAdd}/>
            </div>
        )
    }
}

export default Learn;