import React, {Component} from 'react'

class Field extends Component {

    constructor(props){
        super(props);
        this.state = {value: props.initialValue}
        this.hundleChanges = this.hundleChanges.bind(this)
    }

    hundleChanges(event){
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={this.hundleChanges} value={this.state.value}/>
            </div>
        )
    }
}

export default Field