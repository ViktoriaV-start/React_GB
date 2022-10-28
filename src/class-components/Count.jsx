import { Component } from 'react';

export class Count extends Component {
    state = {
        count: 1,
    }
    render () {
        console.log(this.props.count);
        return <>
            <button type="button" onClick={this.handleClick}>Send</button>
            <p>Count props: {this.props.count}</p>
            <p>Count state: {this.state.count}</p>
        </>
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }
}