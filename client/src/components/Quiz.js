import React, {useState, useEffect} from 'react';

const Quiz = () => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false)

    const getQuestions = () => {
        console.log("getting questions")
        fetch('http://localhost:5000/api/quiz')
        .then(res => res.json())
        .then(data => setQuestions(data))
        .then (() => setLoaded(true))
    }

    useEffect(() => {
        getQuestions();
    }, [])

    if(!loaded){
        return(
            <p>loading...</p>
        )
    }

    const answerOptions = questions[currentQuestion].answerOptions.map((option, index) => {
            return <li key={index} onClick={() => {handleAnswerClick(index)}}>{option}</li>
    })


    const handleAnswerClick = (index) => {
       if(index === questions[currentQuestion].correct) {
               setScore(score + 1);
           }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length)  {
		    setCurrentQuestion(nextQuestion);
		} else {
             setFinished(true);
        }
    }
    

    const handleRetry = () => {
        setCurrentQuestion(0)
        setScore(0)
        setFinished(false)
    }
    
    return(
        <>
        <div className='quiz'>
        <h1>Quiz</h1>
        {/* <img src={}>Quiz</img> */}

        {finished ? (
            <div>
                <p>You scored {score} out of {(questions.length)}</p>
                <button onClick={handleRetry}>Retry</button>
            </div>
        ) : (
        <div>
            <p>Score: {score}</p>
            <p>{questions[currentQuestion].Question}</p>
            <ul>
                {answerOptions}
            </ul>
        </div>
        )
}
        
        </div>
        </>

    )
};


export default Quiz;