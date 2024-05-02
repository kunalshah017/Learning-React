import React, { useState, useEffect } from 'react';
import './NewsBox.css';
import NewsCard from './NewsCard/NewsCard';

const NewsBox = ({ FetchedNewsList }) => {
    const [newsList, setNewsList] = useState([]);

    const [country, setCountry] = useState("in"); // Default country is India [in
    const countryEmoji = {
        "in": "🇮🇳",
        "us": "🇺🇸",
        "gb": "🇬🇧",
        "au": "🇦🇺",
        "ca": "🇨🇦",
        "fr": "🇫🇷",
        "de": "🇩🇪",
        "jp": "🇯🇵",
        "kr": "🇰🇷",
        "ru": "🇷🇺",
        "br": "🇧🇷",
        "it": "🇮🇹",
        "nl": "🇳🇱",
        "se": "🇸🇪",
        "no": "🇳🇴",
        "dk": "🇩🇰",
        "fi": "🇫🇮",
        "es": "🇪🇸",
        "pt": "🇵🇹",
        "cn": "🇨🇳",
        "sg": "🇸🇬",
        "my": "🇲🇾",
        "id": "🇮🇩",
        "ph": "🇵🇭",
        "th": "🇹🇭",
        "sa": "🇸🇦",
        "ae": "🇦🇪",
        "ar": "🇦🇷",
        "co": "🇨🇴",
        "mx": "🇲🇽",
        "za": "🇿🇦",
        "ng": "🇳🇬",
        "eg": "🇪🇬",
        "tr": "🇹🇷",
    };

    const [headline, setHeadline] = useState(`Todays Headlines in ${countryEmoji[country]}`); // Default headline is Top Headlines

    // Fetch headlines function
    const FetchHeadLines = async () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_NEWS_API}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setNewsList(data.articles);
            });
    };

    useEffect(() => {
        // Fetch headlines only if FetchedNewsList is empty
        if (FetchedNewsList.length === 0) {
            FetchHeadLines();
        } else {
            setNewsList(FetchedNewsList); // Update newsList if FetchedNewsList is not empty
            setHeadline("Search Results");
        }
    }, [FetchedNewsList]);

    const renderNewsList = () => {
        // If FetchedNewsList is empty, show headlines
        if (newsList.length === 0) {
            return <p>No news available.</p>; // You can show a message or loader here
        }

        return (
            <div className="news-list">
                {newsList.map((news, index) => (
                    news.title === "[Removed]" ? null : (
                        <NewsCard
                            key={index}
                            urlToImage={news.urlToImage}
                            title={news.title}
                            description={news.description}
                            publishedAt={news.publishedAt}
                            link={news.url}
                        />
                    )
                ))}
            </div>
        );
    };

    return (
        <div className="news-box">
            <div className="headline-header">
                <div className="headline-country">
                    <h1>{headline}</h1>
                </div>
            </div>
            {renderNewsList()}
        </div>
    );
};

export default NewsBox;
