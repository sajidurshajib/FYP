import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap'
import './Subview.css'
import renderHTML from 'react-render-html';
import {newData, dataWipe} from '../../../actions/dataAction'

class Subview extends Component{

    static propTypes={
        auth: PropTypes.object.isRequired,
        newData: PropTypes.func.isRequired,
        dataWipe:PropTypes.func.isRequired
    }

    state={
        formId:'',
        mainId:0,
        
        mainArray:[],
        submitArray:[],

        radioBtnCount: 0,
        checkBoxCount: 0,
        showDataAsArray:false,
        submitDataAsArray:false
    }


    static getDerivedStateFromProps(props, state){
        return {
            mainArray: props.formdata.form_data,
            submitArray: props.formdata.form_submit,
            formId:props.formId
        }
    }

    dataSubmit= e =>{
        e.preventDefault()

        const {formId, submitArray} = this.state

        const nd = {
            form_foreign:formId,
            data:submitArray
        }
        this.props.newData(nd)
    }





    submitOnchange=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                arr[e.target.id]={[e.target.name]:e.target.value}
                this.setState({submitArray:arr})

                console.log(this.state.submitArray)
            }
            return 0
        })
    }

    submitOnradio=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                arr[e.target.getAttribute("as")]={[e.target.name]:e.target.value}
                this.setState({submitArray:arr})

                console.log(this.state.submitArray)
            }
            return 0
        })
    }

    submitCheckbox=(e)=>{
        this.state.submitArray.map((value,i)=>{
            let key=i
            if(key<=0){
                let arr = this.state.submitArray
                arr[e.target.id]={[e.target.name]:e.target.checked}
                this.setState({submitArray:arr})

                console.log(this.state.submitArray)
            }
            return 0
        })
    }





    

    render(){
        console.log(this.state.formId)
        console.log(this.props?.data)

        const DynamicFormItems = []
        this.state.mainArray.map((value,i)=>{
            if(value.fname==='tf'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <input id={value.id} onChange={this.submitOnchange} type='text' name={value.name} placeholder={value.placeholder} required={value.required} />
                    </Fragment>
                )
            }
            else if(value.fname==='ta'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <textarea id={value.id} onChange={this.submitOnchange} name={value.name} placeholder={value.placeholder} required={value.required}></textarea>
                    </Fragment>
                )
            }
            else if(value.fname==='dd'){

                const tempoption=[]
                value.dataArray.map((v,i)=>{
                    tempoption.push(
                        <Fragment key={i}>
                            <option value={v.value}>{v.text}</option>
                        </Fragment>
                    )
                    return 0
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <br/>
                        <label>{value.label}</label>
                        <select id={value.id} onChange={this.submitOnchange} className="form-control" name={value.name}>
                           {tempoption}
                        </select>
                        <br/>
                    </Fragment>
                )
            }
            else if(value.fname==='rb'){

                const tempoption=[]
                let r=0
                value.dataArray.map((v,i)=>{
                    tempoption.push(
                        <Fragment key={i}>
                            {r===0 ?
                                <input as={value.id} onChange={this.submitOnradio} type='radio' name={value.name} value={v.value} checked/> :
                                <input as={value.id} onChange={this.submitOnradio} type='radio' name={value.name} value={v.value} />
                            }
                            <label className="radioBtnLabel">{v.text}</label>
                        </Fragment>
                    )
                    r=r+1
                    return 0
                })

                DynamicFormItems.push(
                    <Fragment key={i}>
                        <br/>
                        <label>{value.label}</label>
                        <br/>
                           {tempoption}
                        <br/>
                    </Fragment>
                )
            }
            else if(value.fname==='lbl'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <label>{value.label}</label>
                        <br/>
                    </Fragment>
                )
            }
            else if(value.fname==='cb'){
                DynamicFormItems.push(
                    <Fragment key={i}>
                        <input type="checkbox" id={value.id} name={value.name} onChange={this.submitCheckbox} value={value.value}/><span> </span><label>{value.text}</label>
                        <br/>
                    </Fragment>
                )
            }
            return 0
        })


        return(
            <div className='Subview'>
                <Container>
                    <Row>
                        {/* <Col md='2'></Col> */}
                        <Col md='12'>
                        <h2 className="heading">{this.props.formdata.title}</h2>
                        <h6>Author name: {this.props.formdata.author_name}</h6>
                        <code>{this.props.formdata.date}</code>
                        {renderHTML(this.props.formdata.description)}
                            <Form>
                                <div id="dynamicForm">
                                    {DynamicFormItems}
                                </div>
                            </Form>
                            <button onClick={this.dataSubmit} className='subBtn'>Submit</button>
                        </Col>
                    </Row>    
                </Container>
            </div>
        )
    }
}



const mapStateProps = state =>({
    auth: state.auth,
    data: state.data
})

export default connect(mapStateProps,{newData, dataWipe})(Subview)