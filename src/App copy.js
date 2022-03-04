import React, { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [data, Setdata] = useState([])

  const anime = () => {
    axios.get("https://newsapi.org/v2/everything?q=anime&language=en&apiKey=3a3dbe8e8be5419bb4aa241a1c4a0c3c")
      .then((response) => {
        console.log(response);
        Setdata(response.data.articles)
      })
      anime();
  }





  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className='button' onClick={anime}>anime</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            data.map((value,index) => {
              return (
                <div key={index} className="col">
                  <div className="card" style={{ width: "200px" }}>
                    <p>{value.articles}</p>
                    <img src={value.urlToImage} className="img" alt="" />

                      <h5 className="title">{value.title}</h5>
                      <p className="text">{value.description}</p>
                      <a href="#" className="button">View</a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  )
}

export default App;