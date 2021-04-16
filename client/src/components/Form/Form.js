import React, {Component} from 'react';

class Form extends Component{
    state = {
        formId:null
    }

    componentDidMount(){
        this.setState({formId:this.props.match.params.id})
    }

    render(){
        return (
            <div className="Form">
                <p>{this.state.formId}</p>
            </div>
        )
    }
} 

export default Form;