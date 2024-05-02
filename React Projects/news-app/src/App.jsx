import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import NewsBox from './NewsBox/NewsBox'

function App() {

  const [FetchedNewsList, setFetchedNewsList] = useState([]);

  const FetchNews = async (searchQuery) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${import.meta.env.VITE_NEWS_API}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedNewsList(data.articles);
      });
  };

  return (
    <>
      <Header FetchNews={FetchNews} />
      <NewsBox FetchedNewsList={FetchedNewsList} />
    </>
  )
}

export default App
