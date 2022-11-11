import React, { useState } from "react";
import { Questions } from "../Helper/Questions";
import ModalCorrectAnswer from "../Components/ModalCorrectAnswer";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);

  const chooseOption = (option: string) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
      <ModalCorrectAnswer/>
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <section className="w-full max-w-screen-2xl m-auto">
      <div>
        <header className="w-full h-24 flex justify-center items-center bg-[#00CC65] text-white font-semibold ">
          <h2 className="text-3xl">{Questions[currentQuestion].question}</h2>
        </header>
        <div className="w-full flex justify-center mt-6">
          <span className="text-2xl">Pontos : {score}</span>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 justify-items-center content-center mt-20">
        <div className=''>
            <button
              onClick={() => {
                chooseOption("optionD");
              }}
              className='w-[500px] p-4 text-3xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white'
            >
              {Questions[currentQuestion].optionA}
            </button>
          </div>
          <div >
            <button
              onClick={() => {
                chooseOption("optionD hover:bg-[#00CC65]")
              }}
              className='w-[500px] p-4 text-3xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white'
            >
              {Questions[currentQuestion].optionB}
            </button>
          </div>
          <div >
            <button
              onClick={() => {
                chooseOption("optionD");
              }}
              className='w-[500px] p-4 text-3xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white'
            >
              {Questions[currentQuestion].optionC}
            </button>
          </div>
          <div >
            <button
              onClick={() => {
                chooseOption("optionD");
              }}
              className='w-[500px] p-4 text-3xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white'
            >
              {Questions[currentQuestion].optionD}
            </button>
          </div>
        </div>

       <div className="w-full flex justify-center mt-10">
       {currentQuestion == Questions.length - 1 ? (
          <button className='p-4 bg-[#00FF7E] text-white text-2xl rounded-xl w-52 hover:bg-[#00CC65]'>Finalizar</button>
        ) : (
            <button onClick={nextQuestion} className='p-4 bg-[#00FF7E] text-white text-2xl rounded-xl w-52 hover:bg-[#00CC65]'>Próxima</button>
        )}
       </div>
      </div>
    </section>
  );
}
