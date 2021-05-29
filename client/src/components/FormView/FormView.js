import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Subview from './Subview/Subview'
import Menu from '../Menu/Menu'

import './FormView.css'

import {singleForm} from '../../actions/formAction'



class FormView extends Component{
    

    static propTypes={
        singleForm: PropTypes.func.isRequired,
    }


    state = {
        formId:null,
        mainArray:[],
        submitArray:[],
        data:''
    }

    static getDerivedStateFromProps(props, state){
        return {formId:props.match.params.id}
    }

    componentDidMount(){
        this.props.singleForm(this.state.formId)
    }


    render(){
        return (
            <div className="Formview">
                <Menu />
                {
                    Object.keys(this.props.form.formAll)!='' ?
                    <Subview data={this.props.form.formAll.form[0]} />:null
                }
            </div>
        )
    }
} 

const mapStateProps = state =>({
    form: state.form
})
export default connect(mapStateProps,{singleForm})(FormView);