import React, { Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Menu from '../Menu/Menu.js';
import './Builder.css'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropTypes from 'prop-types'
import store from '../../store'
import {newForm} from '../../actions/formAction'

class Builder extends Component{

    static propTypes={
        auth: PropTypes.object.isRequired,
        newForm: PropTypes.func.isRequired,
    }

    state={
        mainId:0,
        mainArray:[],
        submitArray:[],

        title:'',
        desc:'',

        //for toggle
        textField: true,
        textArea: true,
        dropDown: true,
        radioBtn: true,
        checkBox: true,
        //dropdown counter
        radioBtnCount: 0,
        checkBoxCount: 0, 

        //text field state
        tfLabel:'',
        tfName:'',
        tfPlaceholder:'',
        tfRequired:false,
        //text area state
        taLabel:'',
        taName:'',
        taPlaceholder:'',
        taRequired:false,
        //drop down state
        ddLabel:'',
        ddName:'',
        ddData:[],
        ddTempText:'',
        ddTempValue:'',
        //radio button state
        rbLabel:'',
        rbName:'',
        rbData:[],
        rbTempText:'',
        rbTempValue:'',
        //checkbox state
        jstLabel:'',
        cbText:'',
        cbName:'',
        cbValue:''
        //Show data as array
        //showDataAsArray:false
    }

    newFormCreate= e =>{
        e.preventDefault()

        const {title,desc,mainArray,submitArray} = this.state

        const newForm = {
            title:title,
            description:desc,
            form_data:mainArray,
            form_submit:submitArray}

        this.props.newForm(newForm)

    }
    

    toggle=(ch)=>{
        if(ch===1){
            this.setState({textField:!this.state.textField})
        }
        else if(ch===2){
            this.setState({textArea:!this.state.textArea})
        }
        else if(ch===3){
            this.setState({dropDown:!this.state.dropDown})
        }
        else if(ch===4){
            this.setState({radioBtn:!this.state.radioBtn})
        }
        else if(ch===5){
            this.setState({checkBox:!this.state.checkBox})
        }
        // else if(ch===6){
        //     this.setState({showDataAsArray:!this.state.showDataAsArray})
        // }
    }


    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value })
    }
    onChecked = e =>{
        this.setState({ [e.target.name]: e.target.checked })
    }
    ckOnChange = (event, editor) =>{
        let data = editor.getData()
        this.setState({
            desc: data
        })
    }



    tfSubmit= e =>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'tf',
            label: this.state.tfLabel,
            name: this.state.tfName,
            placeholder: this.state.tfPlaceholder,
            required: this.state.tfRequired
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:''})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            tfLabel:'',
            tfName:'',
            tfPlaceholder:'',
            tfRequired:false
        })
    
    }

    taSubmit= e =>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'ta',
            label: this.state.taLabel,
            name: this.state.taName,
            placeholder: this.state.taPlaceholder,
            required: this.state.taRequired
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:''})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            taLabel:'',
            taName:'',
            taPlaceholder:'',
            taRequired:false
        })
    
    }


    //drop down
    ddAddSubmit=(e)=>{
        const dd = {
            text:this.state.ddTempText,
            value: this.state.ddTempValue
        }

        this.state.ddData.push(dd)

        this.setState({
            ddTempText:'',
            ddTempValue:''
        })
    }

    ddRemoveSubmit=(e)=>{
        let indx = this.state.ddData.length-1
        this.setState({
            ddData: this.state.ddData.filter((_, i) => i !== indx)
        })

    }

    ddSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'dd',
            label: this.state.ddLabel,
            name: this.state.ddName,
            dataArray: this.state.ddData
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:elm.dataArray[0].value})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            ddLabel:'',
            ddName:'',
            ddData: []     
        })

    }

    //radio button
    rbAddSubmit=(e)=>{
        const rb = {
            text:this.state.rbTempText,
            value: this.state.rbTempValue
        }

        this.state.rbData.push(rb)

        this.setState({
            rbTempText:'',
            rbTempValue:''
        })
    }

    rbRemoveSubmit=(e)=>{
        let indx = this.state.rbData.length-1
        this.setState({
            rbData: this.state.rbData.filter((_, i) => i !== indx)
        })

    }

    rbSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'rb',
            label: this.state.rbLabel,
            name: this.state.rbName,
            dataArray: this.state.rbData
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:elm.dataArray[0].value})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            rbLabel:'',
            rbName:'',
            rbData: []     
        })

    }

    jstLblSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'lbl',
            label: this.state.jstLabel,
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push(null)

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            jstLabel:''   
        })

    }


    cbSubmit=e=>{
        e.preventDefault()

        const elm={
            id: this.state.mainId,
            fname: 'cb',
            name:this.state.cbName,
            text: this.state.cbText,
            value:this.state.cbValue
        }

        this.state.mainArray.push(elm)
        this.state.submitArray.push({[elm.name]:false})

        this.setState({mainId:this.state.mainId+1})

        this.setState({
            cbName:'',
            cbText:'',
            cbValue:''    
        })

    }


    render(){
        const mainArrayShowInCode=[]
        this.state.mainArray.map((value,i)=>{
            mainArrayShowInCode.push(
                <Fragment key={i}>
                    <code>{JSON.stringify(value)}</code>
                </Fragment>
            )
            return 0;
        })

        const submitArrayShowInCode=[]
        this.state.submitArray.map((value,i)=>{
            submitArrayShowInCode.push(
                <Fragment key={i}>
                    <code>{JSON.stringify(value)}</code>
                </Fragment>
            )
            return 0;
        })

        const ddDataShow=[]
        this.state.ddData.map((value,i)=>{
            ddDataShow.push(
                <Fragment key={i}>
                    <p className="ddShowLeft">{value.text}</p>
                    <p className="ddShowRight">{value.value}</p>
                </Fragment>
            )
            return 0;
        })

        const rbDataShow=[]
        this.state.rbData.map((value,i)=>{
            rbDataShow.push(
                <Fragment key={i}>
                    <p className="ddShowLeft">{value.text}</p>
                    <p className="ddShowRight">{value.value}</p>
                </Fragment>
            )
            return 0;
        })




        //Create visually Dynamic Form
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

        console.log(this.state.desc)
        return(
            <div className="Builder">
                <Menu />
                <Container>
                    <Row>
                        <Col md="12">
                            <hr/>
                            <Form.Group>
                                <Form.Control onChange={this.onChange} name="title" type="text" placeholder="Title" />
                            </Form.Group>

                           <CKEditor 
                            editor={ClassicEditor}
                            onChange={this.ckOnChange}
                           />

                        </Col>
                    </Row>
                </Container>


                <Container>
                    <h2 className="center heading">Dynamic Form</h2>
                    <Row>
                        <Col md="3">
                            {this.state.textField ? (<p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(1)}>Text field <span>-</span></p>
                                <Form onSubmit={this.tfSubmit}>
                                    <input type="text" placeholder="Label" value={this.state.tfLabel} name="tfLabel" onChange={this.onChange} />
                                    <input type="text" placeholder="give a unique name" value={this.state.tfName} name="tfName" onChange={this.onChange} />
                                    <input type="text" placeholder="placeholder text" value={this.state.tfPlaceholder} name="tfPlaceholder" onChange={this.onChange}/>
                                    <span className="likeLabel">Required</span>
                                    <input type="checkbox" name="tfRequired" checked={this.state.tfRequired} onChange={this.onChecked}/>
                                    <button className="ml-10">TextField Create</button>            
                                    <hr/>
                                </Form>
                                </Fragment>
                            )}

                            {this.state.textArea ? (<p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>+</span></p>):(
                                <Fragment>
                                <p className="flip" onClick={(e)=>this.toggle(2)}>Text area <span>-</span></p>
                                <Form onSubmit={this.taSubmit}>
                                    <input type="text" placeholder="Label" value={this.state.taLabel} name="taLabel" onChange={this.onChange}/>
                                    <input type="text" placeholder="give a unique name" value={this.state.taName} name="taName" onChange={this.onChange}/>
                                    <input type="text" placeholder="placeholder text" value={this.state.taPlaceholder} name="taPlaceholder" onChange={this.onChange}/>
                                    <span className="likeLabel">Required</span>
                                    <input type="checkbox" checked={this.state.taRequired} name="taRequired" onChange={this.onChecked}/>
                                    <button className="ml-10">TextArea Create</button>
                                    <hr/>
                                </Form>
                                </Fragment>
                            )}

                            {this.state.dropDown ? (<p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>+</span></p>):(
                                <Fragment >
                                    <p className="flip" onClick={(e)=>this.toggle(3)}>Drop down <span>-</span></p>
                                    

                                        <div id="dropDownMakerDiv">
                                            <input className="dropText" name="ddTempText" onChange={this.onChange} value={this.state.ddTempText} placeholder="Text"/>
                                            <input className="dropValue" name="ddTempValue" onChange={this.onChange} value={this.state.ddTempValue} placeholder="Value"/>  

                                            <button className="dropAddRemove" onClick={this.ddAddSubmit}>Add</button>
                                            <button className="dropAddRemove" onClick={this.ddRemoveSubmit}>Remove</button>
                                            
                                            {ddDataShow}
                                        </div>


                                    <Form onSubmit={this.ddSubmit}>
                                        <input type="text" name="ddLabel" onChange={this.onChange} value={this.state.ddLabel} placeholder="Label"/>
                                        <input type="text" name="ddName" onChange={this.onChange} value={this.state.ddName} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">DropDown Create</button>
                                        <hr/>
                                    </Form>
                                </Fragment>
                            )}





                            {this.state.radioBtn ? (<p className="flip" onClick={(e)=>this.toggle(4)}>Radio button <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="radioHideBtn" onClick={(e)=>this.toggle(4)}>Radio button <span>-</span></p>
                                                                       
                                        <div id="radioButtonMakerDiv">
                                            <input className="dropText" name="rbTempText" onChange={this.onChange} value={this.state.rbTempText} placeholder="Text"/>
                                            <input className="dropValue" name="rbTempValue" onChange={this.onChange} value={this.state.rbTempValue} placeholder="Value"/>  

                                            <button className="dropAddRemove" onClick={this.rbAddSubmit}>Add</button>
                                            <button className="dropAddRemove" onClick={this.rbRemoveSubmit}>Remove</button>
                                            
                                            {rbDataShow}
                                        </div>


                                    <Form onSubmit={this.rbSubmit}>
                                        <input type="text" name="rbLabel" onChange={this.onChange} value={this.state.rbLabel} placeholder="Label"/>
                                        <input type="text" name="rbName" onChange={this.onChange} value={this.state.rbName} placeholder="give a unique name"/>
                                        
                                        <button className="ml-10">RadioButton Create</button>
                                        <hr/>
                                    </Form>
                                </Fragment>
                            )}




                            {this.state.checkBox ? (<p className="flip" onClick={(e)=>this.toggle(5)}>Checkbox <span>+</span></p>):(
                                <Fragment>
                                    <p className="flip" id="checkBoxHideBtn" onClick={(e)=>this.toggle(5)}>Checkbox <span>-</span></p>

                                    <Form onSubmit={this.jstLblSubmit}>
                                        <input type="text" name="jstLabel" onChange={this.onChange} value={this.state.jstLabel} placeholder="Label"/>
                                        <button className="ml-10">Create label</button>
                                        <hr/>
                                    </Form>                               

                                    <Form onSubmit={this.cbSubmit}>
                                            <input type="text" name="cbText" onChange={this.onChange} value={this.state.cbText} placeholder="Text"/>
                                            <input className="dropText" name="cbName" onChange={this.onChange} value={this.state.cbName} placeholder="Name"/>
                                            <input className="dropValue" name="cbValue" onChange={this.onChange} value={this.state.cbValue} placeholder="Value"/>  

                                            <button className="ml-10">Add</button>
                                        <hr/>
                                    </Form>

                                </Fragment>
                            )}

                        </Col>
                        <Col md="7">

                            <Form>
                                <div id="dynamicForm">
                                    {DynamicFormItems}
                                </div>
                            </Form>

                            {this.state.mainId!==0 ? (<button onClick={this.newFormCreate}>Proceed</button>) : null}

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateProps = state =>({
    auth: state.auth
})

export default connect(mapStateProps,{newForm})(Builder);