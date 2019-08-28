import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurfs } from '../actions'

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
}

addNewSmurf = event => {
    event.preventDefault()
    const newSmurf = this.state
    this.props.addSmurfs(newSmurf)
    this.setState({ name: '', age: '', height: '' })
}
render () {
    return (
            <div>
                <from onSubmit={this.addNewSmurf}>
                    <input 
                        type='text'
                        name='name'
                        placeholder='yourname'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='your age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='height'
                        placeholder='Height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.addNewSmurf}> 
                    Add Smurf 
                    </button>
                </from>
            
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, { addSmurfs })(SmurfForm);