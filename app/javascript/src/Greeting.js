import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from 'react';
import { fetchGreeting } from "./store/greetingSlice";

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector(state => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting())
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  )
}

export default Greetings;
