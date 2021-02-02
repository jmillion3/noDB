import React, {Component} from 'react';
import axios from 'axios';
import Editor from './Editor.js'
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

    addHours = (hours, id) => {
        axios.put(`/api/children/${id}`, {hours: hours + 1})
        .then(res => {
            this.setState({
                children: res.data
            })
        }).catch(err => console.log(err))
    }

    subHours = (hours, id) => {
        axios.put(`/api/children/${id}`, {hours: hours - 1})
        .then(res => {
            this.setState({
                children: res.data
            })
        }).catch(err => console.log(err))
    }

    deleteChild = id => {
        axios.delete(`/api/children/${id}`)
        .then(res => {
            this.setState({
                children: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        const mappedChildren = this.state.children.map( child => {
            return <Editor 
            key={child.id} 
            child={child}
            addHours={this.addHours}
            subHours={this.subHours}
            deleteChild={this.deleteChild}/>
        })
        return <div className="main">
            <Form addChild={this.addChild}/>
            <div>{mappedChildren}</div>
        </div>
    }
}

export default Main;