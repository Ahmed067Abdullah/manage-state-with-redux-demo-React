import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr/>
                <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.res.map( result => {
                        return <li
                            key = {result.id} 
                            onClick = {() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        res : state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type : 'INCREMENT'}),
        onDecrementCounter : () => dispatch({type : 'DECREMENT'}),
        onAddCounter : (num) => dispatch({type : 'ADD', num}),
        onSubtractCounter : (num) => dispatch({type : 'SUBTRACT', num}),
        onStoreResult : (result) => dispatch({type : 'STORE_RESULT', result}),
        onDeleteResult : (id) => dispatch({type : "DELETE_RESULT", id})
    }
} 

export default connect(mapStateToProps , mapDispatchToProps)(Counter);