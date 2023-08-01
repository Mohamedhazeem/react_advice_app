import { Button } from "react-bootstrap";
import "./randomAdvice.css";
import { useState } from "react";

type RandomAdviceProps = {
  advice:  string| undefined;
  getAdvice: () => void;
};

export const RandomAdviceShow = ({ advice, getAdvice }: RandomAdviceProps) => {
    const [varient, setVarient] = useState('primary');
  return <>
    <div className="position-absolute top-50 start-50 text-center text-justify rounded advice-container">
      <h3 className="p-2">{advice}</h3>
      <br></br>
      <Button
        type= 'button'
        className="rounded-pill position-fixed start-25 end-25 bottom-0 m-1"
        variant= {varient}
        onClick={(e) => {
            e.preventDefault();
            console.log('call')
            setVarient('secondary');
            getAdvice();
            setTimeout(() => {
                
                setVarient('primary')
            },1000)
        }}
      >
        New Advice
      </Button>
    </div>
  </>;
};
