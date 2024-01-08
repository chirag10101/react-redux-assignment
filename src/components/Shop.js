import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../Action/index';
import {bindActionCreators} from 'redux';

import React from 'react'

export const Shop = () => {

    const amount = useSelector(state => state.amount);
    const dispatch = useDispatch();
    const {depositeMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
    return (
    <div className='App'>shop
        <h1> deposit /withdraw money</h1>
        Amount is {amount} 
        <br/><br/>
        <button type='button' onClick={()=>depositeMoney(100)}> Deposit Money </button>
        <button type='button' onClick={()=>withdrawMoney(100)}> Withdraw Money </button>
    </div>
  )
}
