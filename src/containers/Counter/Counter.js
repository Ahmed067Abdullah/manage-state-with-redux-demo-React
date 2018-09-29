import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement, add, subtract, storeResult, deleteResult} from '../../store/actions/index';

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
        onIncrementCounter : () => dispatch(increment()),
        onDecrementCounter : () => dispatch(decrement()),
        onAddCounter : (num) => dispatch(add(num)),
        onSubtractCounter : (num) => dispatch(subtract(num)),
        onStoreResult : (result) => dispatch(storeResult(result)),
        onDeleteResult : (id) => dispatch(deleteResult(id))
    }
} 

export default connect(mapStateToProps , mapDispatchToProps)(Counter);