import React from 'react'
import { useState, useEffect } from "react";
import {  getMovies } from "@/services/userServices";
import { useParams } from 'react-router-dom';

const Details = () => {
    const [gif, setGif] = useState([]);
    const { title } = useParams()

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await getMovies();
            if (response.status === 200) {
              setGif(response.data);
            }
          } catch (error) {
            console.error("Ocurrio un error en Login", error.message);
          }
        };
        getData();
      }, [title]);

      if(!gif)

  return (
    <div>
        <h1>sdklfgjkl</h1>
        gif.title
    </div>
  )
}

export default Details
