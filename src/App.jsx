import React, { useEffect, useState } from "react";

const Container = () => {
  const [player, setPlayer] = useState("Player");
  const [bot, setBot] = useState("Bot");
  const [result, setResult] = useState("Let's See Who Win?");
  const [round, setRound] = useState(0);
  const [win, setWin] = useState(0);
  const [draw, setDraw] = useState(0);
  const [lose, setLose] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const options = ["🖐", "👊", "✌"];
  useEffect(() => {
    if (trigger) {
      whoWins();
    }
  });

  const acak = () => {
    return options[Math.floor(Math.random() * options.length)];
  };
  function whoWins() {
    if (
      (player === "🖐" && bot === "✌") ||
      (player === "✌" && bot === "👊") ||
      (player === "👊" && bot === "🖐")
    ) {
      setLose(lose + 1);
      setResult("Bot Win");
    }
    if (
      (player === "🖐" && bot === "👊") ||
      (player === "✌" && bot === "🖐") ||
      (player === "👊" && bot === "✌")
    ) {
      setWin(win + 1);
      setResult("Player Win");
    }
    if (
      (player === "🖐" && bot === "🖐") ||
      (player === "✌" && bot === "✌") ||
      (player === "👊" && bot === "👊")
    ) {
      setDraw(draw + 1);
      setResult("DRAW");
    }

    setTrigger(false);
  }
  const handlerClick = (e) => {
    const suit = e.target.innerText;
    setRound(round + 1);
    setPlayer(suit);
    setBot(acak);
    setTrigger(true);
  };
  return (
    <div className=" xl:mx-auto h-screen px-3 py-2 bg-rose-100 flex flex-col items-center justify-between bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100">
      <div
        id="result"
        className="flex flex-col items-center w-2/3 gap-2 justify-center py-5 relative"
      >
        <div className="bg-emerald-50 w-full h-full absolute  blur-md opacity-50"></div>
        <div className="bg-transparent w-full h-full z-10  flex flex-col items-center">
          <p className="text-4xl font-bold">
            {player} vs {bot}
          </p>
          <p className="text-xl font-Gugi">{result}</p>
        </div>
      </div>

      <div
        id="game"
        className=" relative flex flex-col items-center justify-center w-4/5 h-1/5 sm:h-2/5"
      >
        <div className="bg-emerald-50 w-full h-full absolute  blur-md opacity-50"></div>
        <div className="flex items-center justify-center  w-full h-full flex-row gap-16 z-10">
          <button
            className="text-7xl sm:text-8xl hover:scale-125 transition-all duration-200 hover:animate-pulse  hover:-translate-y-2 sm:scale-150"
            onClick={(e) => {
              handlerClick(e);
            }}
          >
            ✌
          </button>
          <button
            className="text-7xl sm:text-8xl hover:scale-125 transition-all duration-200 hover:-translate-y-2 hover:animate-pulse sm:scale-150"
            onClick={(e) => {
              handlerClick(e);
            }}
          >
            👊
          </button>
          <button
            className="text-7xl sm:text-8xl hover:scale-125 transition-all duration-200 hover:animate-pulse  hover:-translate-y-2 sm:scale-150"
            onClick={(e) => {
              handlerClick(e);
            }}
          >
            🖐
          </button>
        </div>
      </div>
      <div
        id="Score"
        className="border-2 rounded-md py-7 px-9 shadow-md shadow-green-50 bg-slate-100 w-3/6"
      >
        <p>Round : {round}</p>
        <p>Win : {win}</p>
        <p>Draw : {draw}</p>
        <p>Lose : {lose}</p>
      </div>
    </div>
  );
};
export default Container;
