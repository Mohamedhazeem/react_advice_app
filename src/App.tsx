import "bootstrap/dist/css/bootstrap.min.css";
import { randomAdviceFetch } from "./lib/fetch";
import { useEffect, useState } from "react";
import { RandomAdviceShow } from "./components/RandomAdviceShow";
import { SearchAdvice } from "./components/SearchAdvice";

export type adviceSlip = {
  slip: {
    slip_id: number;
    advice: string | undefined;
  };
} & Partial<searchAdvice>;

type advice = {
  id: number;
  advice: string;
};
export type searchAdvice = {
  total_results: number;
  slips: advice[];
} & Partial<message>;

type message = {
  message: {
    type: string;
    text: string;
  };
};
const randomAdviceURL = "https://api.adviceslip.com/advice";
const searchAdviceURL = "https://api.adviceslip.com/advice/search/";
function App() {
  const [randomAdvice, setRandomAdvice] = useState<adviceSlip>(() => {
    return { slip: { slip_id: 0, advice: "Loading..." } };
  });

  useEffect(() => {
    getRandomAdvice();
  }, []);

  function handlRandomAdvice(data: adviceSlip | null) {
    if (data !== null) {
      setRandomAdvice({
        slip: { slip_id: data.slip.slip_id, advice: data.slip.advice },
      });
    }
  }
  function getRandomAdvice() {
    randomAdviceFetch(randomAdviceURL)
      .then((data: adviceSlip) => handlRandomAdvice(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <SearchAdvice
        url={searchAdviceURL}
        handleSearchAdvice={setRandomAdvice}
      />
      <RandomAdviceShow
        advice={randomAdvice.slip.advice}
        getAdvice={getRandomAdvice}
      />
    </>
  );
}

export default App;
