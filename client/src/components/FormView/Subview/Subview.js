import React, {Component, Fragment} from 'react'
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap'
import './Subview.css'
import renderHTML from 'react-render-html';

class Subview extends Component{

    state={
        mainId:0,
        mainArray:[],
        submitArray:[],
        //for toggle
        // textField: true,
        // textArea: true,
        // dropDown: true,
        // radioBtn: true,
        // checkBox: true,
        //dropdown counter
        radioBtnCount: 0,
        checkBoxCount: 0,

        //text field state
        // tfLabel:'',
        // tfName:'',
        // tfPlaceholder:'',
        // tfRequired:false,
        //text area state
        // taLabel:'',
        // taName:'',
        // taPlaceholder:'',
        // taRequired:false,
        // //drop down state
        // ddLabel:'',
        // ddName:'',
        // ddData:[],
        // ddTempText:'',
        // ddTempValue:'',
        // //radio button state
        // rbLabel:'',
        // rbName:'',
        // rbData:[],
        // rbTempText:'',
        // rbTempValue:'',
        // //checkbox state
        // jstLabel:'',
        // cbText:'',
        // cbName:'',
        // cbValue:'',
        //Show data as array
        showDataAsArray:false,
        submitDataAsArray:false
    }


    static getDerivedStateFromProps(props, state){
        return {
            mainArray: props.data.form_data,
            submitArray: props.data.form_submit
        }
    }


    render(){
        console.log(this.props.data)

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
                        <h2 className="heading">{this.props.data.title}</h2>
                        <h6>Author name: {this.props.data.author_name}</h6>
                        <code>{this.props.data.date}</code>
                        {renderHTML(this.props.data.description)}
                            <Form>
                                <div id="dynamicForm">
                                    {DynamicFormItems}
                                </div>
                            </Form>
                            <button className='subBtn'>Submit</button>
                        </Col>
                    </Row>    
                </Container>
            </div>
        )
    }
}

export default Subview