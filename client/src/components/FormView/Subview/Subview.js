import React, {Component} from 'react';

class Subview extends Component{

    
    render(){
        console.log(this.props.data)
        return(
            <div>
                <h2>{this.props.data.title}</h2>
            </div>
        )
    }
}

export default Subview