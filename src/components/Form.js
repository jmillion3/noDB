import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            day: '',
            hours: ''
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    
    handleDayChange = e => {
        this.setState({
            day: e.target.value
        })
    }
    
    handleHoursChange = e => {
        this.setState({
            hours: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, day, hours} = this.state
        this.props.addChild(name, day, hours);
        this.setState({
            name: '',
            day: '',
            hours: ''
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input 
                onChange={e => this.handleNameChange(e)}
                value={this.state.name}
                placeholder="Name"
                type="text"/>
                <input  
                onChange={e => this.handleDayChange(e)}
                value={this.state.day}
                placeholder="Day"
                type="text"/>
                <input 
                onChange={e => this.handleHoursChange(e)}
                value={this.state.hours}
                placeholder="Hours"
                type="number" />
                <button type="submit">ADD</button>
            </form>
        </div>
    }

}

export default Form;