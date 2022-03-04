import React from "react";
import './AnimeItem.css'


const AnimeItem = ({title, description, url, urlToImage}) => {
    return (
        <div className="col">
            <img className="img" src={urlToImage} alt="Image" />
            <h3> <a href={url}>{title}</a></h3>
            <p>{description}</p>
        </div>
    )
}

export default AnimeItem;