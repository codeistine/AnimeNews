import React from "react";
import './AnimeItem.css'


const AnimeItem = ({title, description, url, urlToImage}) => {
    return (
        <div className="col">
            <img className="img" src={urlToImage} alt="Image" />
            <div className="content">
                <h3> <a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AnimeItem;