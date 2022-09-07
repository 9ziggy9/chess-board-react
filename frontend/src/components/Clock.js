import '../index.css';
import {useEffect, useState} from 'react';
import {useGame} from "../hooks/useGame";

const Clock = () => {
  const [state, dispatch] = useGame();
  const [time, setTime] = useState(500);

  useEffect(() => {
    const pTime = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(pTime);
  }, []);

  return (
    <>
    <div className="clock-face">
      <div className="time">
        {time}
      </div>
      <button onClick={() => dispatch({type: "INIT"})}></button>
    </div>
    </>
  );
};

export default Clock;
