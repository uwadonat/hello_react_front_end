import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from './redux/Greetings';

function Greeting() {
  const greetings = useSelector((state) => state.greetingReducer);

  setTimeout(() => {
    window.location.reload(1);
  }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetings());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(greetings);
  }, [greetings]);

  const hello = () => {
    const Loading = 'Loading...';
    return body[0]
      ? body[Math.floor(Math.random() * body.length)].greeting
      : Loading;
  };

  return (
    <div className="display">
      <h2>Display random greetings from my Greeting Api </h2>
      <hr />
      <p>{hello()}</p>
    </div>
  );
}
export default Greeting;
