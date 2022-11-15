import React, { useState } from "react";
import { Questions } from "../Helper/Questions";
import ModalCorrectAnswer from "../Components/ModalCorrectAnswer";
import ModalIncorrectAswer from "../Components/ModalIncorrectAswer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Transition from "../Components/Transition";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  const chooseOption = (option: string) => {
    setOptionChosen(option);
  };

  const checkAnswer = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setCorrectAnswer(true);

      toast.success("CERTA RESPOSTA !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setIncorrectAnswer(true);

      toast.error("REPOSTA INCORRETA !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const lastQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <Transition direction="right">
      <section className="w-full max-w-screen-2xl m-auto">
        {correctAnswer == true ? (
          <div className=" w-full h-screen bg-[#000000a9] absolute flex justify-center items-center">
            <Transition direction="right">
              <ModalCorrectAnswer />
              <button
                onClick={() => setCorrectAnswer(false)}
                className="absolute top-28 right-52 text-white text-6xl font-extrabold"
              >
                <AiOutlineClose />
              </button>
            </Transition>
          </div>
        ) : (
          <></>
        )}
        {incorrectAnswer == true ? (
          <div className=" w-full h-screen bg-[#000000a9] absolute flex justify-center items-center">
            <Transition direction="right">
              <ModalIncorrectAswer />
              <button
                onClick={() => setIncorrectAnswer(false)}
                className="absolute top-28 right-52 text-white text-6xl font-extrabold"
              >
                <AiOutlineClose />
              </button>
            </Transition>
          </div>
        ) : (
          <></>
        )}
        <div>
          <header className="w-full h-24 flex justify-center items-center bg-[#00CC65] text-white font-semibold ">
            <h2 className="text-3xl">{Questions[currentQuestion].question}</h2>
          </header>
          <div className="w-full grid grid-cols-2 gap-2 justify-items-center content-center mt-20">
            <div className="">
              <button
                onClick={() => {
                  chooseOption("optionA");
                }}
                className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
              >
                {Questions[currentQuestion].optionA}
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  chooseOption("optionB");
                }}
                className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
              >
                {Questions[currentQuestion].optionB}
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  chooseOption("optionC");
                }}
                className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
              >
                {Questions[currentQuestion].optionC}
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  chooseOption("optionD");
                }}
                className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
              >
                {Questions[currentQuestion].optionD}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              onClick={checkAnswer}
              className="bg-[#00CC65] p-4 text-white w-60 rounded-2xl text-2xl hover:bg-[#008b46]"
            >
              Verificar Resposta
            </button>
          </div>
          <div className="w-full max-w-[600px] m-auto flex justify-around mt-10">
            {currentQuestion == Questions.length - 1 ? (
              <button className="p-4 bg-blue-500 text-white text-2xl rounded-xl w-52 hover:bg-blue-700">
                Finalizar
              </button>
            ) : (
              <>
                <button
                  onClick={lastQuestion}
                  className="p-4 text-blue-500 flex flex-row-reverse justify-center items-center  text-2xl rounded-xl w-64"
                >
                  Anterior
                  <AiOutlineArrowLeft />
                </button>

                <button
                  onClick={nextQuestion}
                  className="p-4 text-blue-500 flex justify-center items-center  text-2xl rounded-xl w-64"
                >
                  Próximo
                  <AiOutlineArrowRight />
                </button>
              </>
            )}
          </div>
        </div>
        <ToastContainer />
      </section>
    </Transition>
  );
}
