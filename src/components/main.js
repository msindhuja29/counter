import React, { Component } from 'react'

export default class main extends Component {
    constructor(props){
        super(props);
        this.state = { 
            number : 0
        }
        // function operation(operationType){
        //     this.state += 1
        // }
    }
    
    render() {
        function operation(operationType){
            if(operationType=="ADD"){
                this.setState({number: this.state.number + 1});
            }
            else if(operationType=="SUB"){
                this.setState({number: this.state.number - 1});
            }
            else {
                this.setState({number: 0 });
            }
        }
        return ( 
        <div className="main">
            <h1>Counter App</h1>
            <h1>{this.state.number}</h1>
            <button className="btn btn-primary" onClick ={operation.bind(this,"ADD")}>Incremental</button>
            <button className="btn btn-danger" onClick ={operation.bind(this,"SUB")}>Decremental</button>
            <button className="btn btn-warning" onClick ={operation.bind(this,"clear")}>Clear</button>
        </div>
        )
    }
}