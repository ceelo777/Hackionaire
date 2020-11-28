import React from 'react';
import classes from './QuestionCard.css';
import ReactDOM, { render } from 'react-dom';

class QuestionCard extends React.Component {
    state = {
        "question": "Sample Question",
        "answer": "Sample Answer",
        "color": this.props.color
    }    

    render() {
        var divStyle = {
            backgroundColor: this.props.color        
        }

        return (
            <div className="card-container" style={divStyle}>
                <div className="card-question">
                    {this.state.question}                    
                </div>
                <div className="card-answer">
                    {this.state.answer}                    
                </div>
            </div>
        )
    }
}

export default QuestionCard;