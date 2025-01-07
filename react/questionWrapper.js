import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "./index.css"

const CSS_HANDLES = ["quizContainer", "body", "questionContainer", "question", "options", "option", "submit"]

const questionWrapper = () => {
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <body>
        <div className={`${handles.quizContainer}`}>
          <div className={`${handles.questionContainer}`}>
            <h3 className={`${handles.question}`}></h3>
            <ul className={`${handles.options}`}>
              <li className={`${handles.option}`}></li>
              <li className={`${handles.option}`}></li>
              <li className={`${handles.option}`}></li>
              <li className={`${handles.option}`}></li>
            </ul>
          </div>
          <button class = {`${handles.submit}`}>Next Question</button>
        </div>
        <script src=""></script>
    </body>
    )
}

export default questionWrapper