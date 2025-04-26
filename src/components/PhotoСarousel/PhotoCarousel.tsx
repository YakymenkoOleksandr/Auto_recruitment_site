import style from "./PhotoCarousel.module.css";
import { useState } from "react";

export default function PhotoCarousel() {
  const [numOfFoto, setNumOfFoto] = useState(1);

  function hendlerPlus() {
    return setNumOfFoto(numOfFoto + 1);
  }

  function hendlerMinus() {
    return setNumOfFoto(numOfFoto - 1);
  }

  console.log(numOfFoto);

  return (
    <div>
      <div className={style.galery}>
             
      </div>
      {numOfFoto > 1 ? <button onClick={hendlerMinus}> -</button> : <button onClick={hendlerMinus} disabled> -</button>}
      {numOfFoto < 10 ? <button onClick={hendlerPlus}> + </button> : <button onClick={hendlerPlus} disabled> + </button>}
    </div>
  );
}
