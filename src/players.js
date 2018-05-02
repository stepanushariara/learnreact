import React from 'react';
import Player from './player';

class Players extends React.Component {
    render() {
        return (
            <div>
                {this.props.players.map((player) => {
                    return (
                        <Player key={player.id} name={player.name} score={player.score}/>
                    )
                })}
            </div>
        )
    }
}

export default Players;