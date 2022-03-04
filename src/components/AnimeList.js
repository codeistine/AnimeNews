import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimeItem from "./AnimeItem";

const AnimeList = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            const res = await Axios.get("https://newsapi.org/v2/everything?q=anime&language=en&apiKey=3a3dbe8e8be5419bb4aa241a1c4a0c3c");
            setData(res.data.articles);
            console.log(res);
        };
        getData();
    }, []);
    
    return (

        <div className="wrapper">
            <div className="header">Kimolaki</div>
            <div className="row">
                {data.map(({title, description, url, urlToImage}) => (   //destructured style
                    <AnimeItem title={title} 
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default AnimeList;