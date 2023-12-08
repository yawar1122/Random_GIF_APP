import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

  const {gif,loading,fetchData} =useGif();

  const clickHandler = () => {
    fetchData();
  };

  return (
    <div className="w-3/6 h-[450px] bg-green-400 mt-6 rounded-lg flex flex-col items-center justify-between py-4 px-5">
      <h1 className="bg-green-500 mt-[15px] text-white font-bold text-2xl py-2 px-8 rounded-xl border-4">
        Random GIF
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} className="w-[400px] h-[200px]"  />)
      }
      
      
      
      <button
        onClick={() => fetchData()}
        className="w-full bg-green-900 text-white py-3 rounded-full font-bold text-2xl transition-all duration-200 hover:border-2 hover:bg-green-500"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
