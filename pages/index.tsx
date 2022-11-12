import React from "react";
import Image from "next/image";
import windImg from "../Assets/img2.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Image src={windImg} alt='wind power background'/>

      <div className="w-full h-screen  absolute top-0 flex justify-center items-center ">
        <div className="text-center text-white bg-white w-[600px] h-96 rounded-3xl">
          <div>
            <h1 className="text-6xl font-bold m-9 text-[#00FF7E]">Quiz</h1>
            <h3 className="text-4xl m-9 text-[#00FF7E] ">Sobre o Sistema Eólico</h3>
          </div>

          <div className="m-9">
            <Link href={'/Quiz'}><button className="w-80 p-4 bg-[#00FF7E] text-white text-3xl rounded-lg font-bold hover:bg-[#00CC65]">Começar</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
