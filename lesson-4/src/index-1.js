import React from "react";

class CounterClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            students:[],
            user: {
                name:'',
                age:''
            }
        }
    }

    clickincreasecount = () => {
        this.setState({count: this.state.count + 1})
    }

    render(){
    const{count, student,user} = this.state
    return(
        <div className = "Counter">
            <h3>{count}</h3>
            <button onClick = {this.clickincreasecount}>Increase</button>
        </div>
)

    }
}