import React, {Component} from "react"

class AnswerForm extends Component {
    constructor(props){
        super(props)
        this.state={
            answer: ""
        }
    }

    handleChange=(event)=>{
        this.setState({
            answer: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.checkAnswer(this.state.answer)
        this.setState({
            answer: ""
        })
    }

    render(){
        return (

            <div className="AnswerForm" >
                <form onSubmit={this.handleSubmit} style={{display: "inline-block", padding: "0.5rem"}}>
                    <input 
                        type="text"
                        name="answer"
                        placeholder="Answer"
                        value={this.state.answer}
                        onChange={this.handleChange}
                    />  
                    <button style={{width: "3rem"}}>Go</button>  
                </form>    

            </div>
        )
    }
}

export default AnswerForm 