import '../index.css';
import {useEffect, useState} from 'react';

const Clock = () => {
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
    </div>
    </>
  );
};

export default Clock;
