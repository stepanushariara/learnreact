import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.onPlayerChange = this.onPlayerChange.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    onPlayerChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    addPlayer() {
        this.props.onAdd(this.state.name);
        this.setState({
            name: ""
        })
    }

    render() {
        const styles = {
            container: {
                padding: 10
            },
            input: {
                flex: 1,
                paddingRight: 20,
                width: "45%",
                height: 27
            },
            button: {
                float: "right",
                marginRight: 80,
                width: 120,
                padding: 10
            }
        }

        return (
            <div style={styles.container}>
                <input style={styles.input} onChange={this.onPlayerChange} type={"text"} placeholder={"Put name here.. "} value={this.state.name}/>
                <button style={styles.button} onClick={this.addPlayer}>Add Player</button>
            </div>
        )
    }
}

export default Add;