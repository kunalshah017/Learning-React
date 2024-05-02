import React from 'react';
import './NewsCard.css';

const NewsCard = (news) => {
    return (
        < div className="news-card" >
            {
                news.urlToImage === null ? null : (
                    <div className="news-card-image">
                        <img src={news.urlToImage} alt="news" />
                    </div>
                )
            }
            < div className="news-card-content" >
                <div className="news-details">
                    <h2 className='news-title'>{news.title}</h2>
                    <p className='news-description'>{news.description}</p>
                </div>

                <div className="news-card-footer">
                    <p className='news-published'>{news.publishedAt}</p>
                    <a className='news-read-more' href={news.link} target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div >
        </div >
    );
}

export default NewsCard;