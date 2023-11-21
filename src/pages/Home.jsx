import React from "react";
import { useState, useEffect } from "react";
import { getSingleUserService, getMovies } from "@/services/userServices";


const Home = () => {
  
  const [gifs, setGifs] = useState([]);
  const [searchMovie, setSearchMovie] = useState('')
  const handleInputChange = event => {
    setSearchMovie(event.target.value)
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovies();
        if (response.status === 200) {
          setGifs(response.data);
        }
      } catch (error) {
        console.error("Ocurrio un error en Login", error.message);
      }
    };
    getData();
  }, []);

  const sendData = async (data) => {
    try {
      const response = await getSingleUserService(data);
      if (response.status === 200) {
        // guardmos el token el localstore del navegador
        //localStorage.setItem('token', response.data.token)
        login(response.data.token);
        navigate("");
      }
    } catch (error) {
      console.error("Ocurrio un error en Login", error.message);
    }
  };
  return (

    <div className='main_container'>
      <form className='form-inline my-2 my-lg-0 w-75'>
        <input type='text' className='form-control' id='search' placeholder='Enter Movie' value={searchMovie} onChange={handleInputChange}  />
      </form>
      
      <div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src="../img/toma1.jpg" className="d-block w-80" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="../img/toma2.jpg" className="d-block w-80" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="../img/toma3.jpg" className="d-block w-80" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
      
      <h1>Movies</h1>

      
     

      <div className="container">
        {
          // las llaves en un return implicito
          gifs.length &&
            gifs.map((gif) => (
              <div className="card" style={{ width: "13rem" }}>
              <img src={gif.backdrop_path} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{gif.title}</h5>
               
              </div>
            </div>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
