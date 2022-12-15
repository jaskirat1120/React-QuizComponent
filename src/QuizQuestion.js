import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="button">
                    <ul>
                        {this.props.quiz_question.answer_options.map(i => { return (<QuizQuestionButton button_text={i} />) })}

                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion