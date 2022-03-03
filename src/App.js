import React, { useState } from 'react'
import axios from 'axios'
function App() {

  const [data, Setdata] = useState([])

  const anime = () => {
    axios.get("https://newsapi.org/v2/everything?q=anime&language=en&apiKey=3a3dbe8e8be5419bb4aa241a1c4a0c3c")
      .then((response) => {
        console.log(response);
        Setdata(response.data.articles)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={anime}>anime</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            data.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "200px" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      {anime}
    </>
  )
}

export default App;