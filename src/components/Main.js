import React, {Component} from 'react';
import axios from 'axios';
import Form from './Form.js';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            children: []
        }
    }

    componentDidMount() {
        this.getChildren();
    }

    getChildren = () => {
        axios.get('/api/children')
        .then(res => {
            this.setState({
                children: res.data
            })
        }).catch(err => console.log(err))
    }

    addChild = (name, day, hours) => {
        axios.post('/api/children', {name, day, hours})
        .then(res => {
            this.setState({
                children: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return <div className="main">
            <Form addChild={this.addChild}/>
        </div>
    }
}

export default Main;