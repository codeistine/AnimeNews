import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimeItem from "./AnimeItem";
import Header from "./Header";
import Footer from "./Footer";


const AnimeList = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            const res = await Axios.get("https://newsapi.org/v2/everything?q=anime&language=en&apiKey=49e230d0644042ea89e462e4d24e7fe6");
            setData(res.data.articles);
            console.log(res);
        };
        getData();
    }, []);
    
    return (
        <>
        <Header />
        
        <div className="wrapper">
            <div className="row">
                {data.map(({title, description, url, urlToImage,publishedAt,author}) => (   //destructured style
                    <AnimeItem title={title} 
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                    publishedAt={publishedAt}
                    author={author}
                    />
                ))}
            </div>
           
        </div>
        <Footer />
        </>
    )
}

export default AnimeList;