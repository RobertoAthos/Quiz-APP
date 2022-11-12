import React, { useState } from "react";
import { Questions } from "../Helper/Questions";
import Image from "next/image";
import img from "../Assets/thumbsup.png";
import ModalCorrectAnswer from "../Components/ModalCorrectAnswer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const chooseOption = (option: string) => {
    setOptionChosen(option);
  };

  const checkAnswer = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
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
    <section className="w-full max-w-screen-2xl m-auto">
      {/* <div className=" w-full h-screen absolute flex justify-center items-center">
        <ModalCorrectAnswer/>
      </div> */}
      <div>
        <header className="w-full h-24 flex justify-center items-center bg-[#00CC65] text-white font-semibold ">
          <h2 className="text-3xl">{Questions[currentQuestion].question}</h2>
        </header>
        <div className="w-full grid grid-cols-2 gap-2 justify-items-center content-center mt-20">
          <div className="">
            <button
              onClick={() => {
                chooseOption("optionD");
              }}
              className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
            >
              {Questions[currentQuestion].optionA}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                chooseOption("optionD hover:bg-[#00CC65]");
              }}
              className="w-[500px] p-4 text-2xl border border-[#00CC65] rounded-3xl text-center shadow-2xl m-6 hover:bg-[#00CC65] hover:text-white"
            >
              {Questions[currentQuestion].optionB}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                chooseOption("optionD");
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
  );
}
