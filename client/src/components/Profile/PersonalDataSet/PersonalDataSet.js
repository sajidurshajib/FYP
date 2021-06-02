import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {personalForm} from '../../../actions/formAction'
import {Container, Row, Col, Form} from 'react-bootstrap';
import './PersonalDataSet.css'

class PersonalDataSet extends Component{

    static propTypes={
        personalForm: PropTypes.func.isRequired
    }

    componentDidMount(){
       this.props.personalForm()
    }

    render(){
        console.log(this.props.form.formPersonal.form)
        return(
            <div className="PersonalDataSet">
                <Container>
                <Row>
                {Object.keys(this.props.form)!==null ?
                this.props.form.formPersonal?.form?.map((v,i)=>{
                    return (
                        <Col md='4'>
                        <div className="mapData" key={i}>                           
                            <div className="wrapper">
                                <h5><b><Link to={`/formview/${v._id}`} >{v.title}</Link></b></h5>
                                <code> {v.date} </code>
                            </div>        
                        </div>
                        </Col>
                    )
                })
                :null}
                </Row>
                </Container>
            </div>
        )
    }


}

const mapStateProps = state =>({
    form : state.form
})
    
export default connect(mapStateProps, {personalForm})(PersonalDataSet)