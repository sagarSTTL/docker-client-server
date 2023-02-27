import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Text } from 'react';
import './App.css';

const App = () => {
  const [isValue, setValue] = useState("......");
  const [isError, setError] = useState("......");

  const fetchData = async () => {
    // const url = "https://api.adviceslip.com/advice";
    const url = "http://127.0.0.1:3000/";
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.msg);
      setValue(json.msg);
    }
    catch (error) {
      setError(error)
      console.log("error", error);
    }
  }

  return (
    <div>

      <div>
        <button onClick={fetchData}>Click here...! </button>
      </div>

      {"Click and get this Data ------>"}{isValue}

    </div>
  );
};
export default App;

