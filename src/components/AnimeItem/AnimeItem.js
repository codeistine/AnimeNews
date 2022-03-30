import React from "react";
import './AnimeItem.css'

const DataNewsDate = (newsApiDate) => {
    let timestamp = new Date(newsApiDate).getTime();
    let Day = new Date(timestamp).getDate();
    let Month = new Date(timestamp).getMonth() + 1;
    let Year = new Date(timestamp).getFullYear();
    let OurNewDateFormat = `${Day}/${Month}/${Year}`;
    return OurNewDateFormat
}

const AnimeItem = ({title, description, url, urlToImage,publishedAt,author }) => {
    return (
        <>
        <div className="col">
            <div className="img"><img src={urlToImage} alt="Image" /></div>
            <div className="content">
                <p className="post-date">{DataNewsDate(publishedAt)}</p>
                <h3> <a href={url}>{title}</a></h3>
                <p>{description}</p>
                <h4 className="post-author">{author}</h4>
            </div>
        </div>
        </>
    )

}

export default AnimeItem;