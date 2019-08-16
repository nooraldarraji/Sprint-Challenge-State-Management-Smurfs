import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf'


import Loader from 'react-loader-spinner'
import { getSmurfs } from '../actions'


const SmurfList = props => {
    return (
     
    <>
    {console.log('this is from SL ', props)}
    <h1>SmurfList </h1>

    <button onClick={props.getSmurfs}>
    {props.isLoading ? <Loader 
                                type="TailSpin" 
                                color="#00BFFF"
                                height={10} 
                                width={20} 
                                /> : 'Show Smurf'}
    </button>

    {props.smurfs && props.smurfs.map(smurf => (
        <Smurf 
                key={smurf.id} 
                smurf={smurf} 
                />
    ))}
    {props.error && <p>{props.error}</p> }
    </>
    )
}

const mapStateToProps = state => {
    return {

        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    };

}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);