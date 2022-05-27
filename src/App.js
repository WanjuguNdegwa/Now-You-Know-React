import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'


import { Header, Navbar, NewsList, Footer, SavedArticles, Sources} from './components'


function App() {
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const [category, setCategory] = useState('general')
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState('en')
  const [country, setCountry] = useState('us')
  const [articles, setArticles] = useState([])
  const [sources, setSources] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const articlesRef = useRef(articles)
  const sourcesRef = useRef(sources)

  const proxy = 'https://api.allorigins.win/get?url='

  let navigate = useNavigate();

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines/sources?
        apiKey=${NEWS_API_KEY}&
        country=${country}&
        category=${category}&
        language=${language}`;
    url = proxy + encodeURIComponent(url.replace(/\s/g, ''));

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const newsSources = JSON.parse(data.contents).sources
        setSources(newsSources)
      })
  }, [sourcesRef.current, category, language, country, NEWS_API_KEY])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?
                q=${query}&
                apiKey=${NEWS_API_KEY}&
                country=${country}&
                category=${category}&
                limit=15`;
    url = proxy + encodeURIComponent(url.replace(/\s/g, ''));

    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const news = JSON.parse(data.contents).articles
        setArticles(news)
      }).finally(() => setIsLoading(false))
  }, [articlesRef.current, category, query, country, NEWS_API_KEY])

  const handleCategoryClick = (c) => {
    setCategory(c)
    navigate('/')
  }
  
  const handleCountryChange = (c) => {
    setCountry(c)
    navigate('/')
  }

  const handleQuery = (e) => {
    e.preventDefault()
    const q = e.target[0].value;
    setQuery(q)
    navigate('/')
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    const sourceList = sources.filter(source => source.language === lang).map(source => source.id).join(',')
    let url = `https://newsapi.org/v2/everything?
                apiKey=${NEWS_API_KEY}&
                q=${query}&
                sources=${sourceList}&
                language=${lang}&
                page=1&
                pageSize=15`;
    url = proxy + encodeURIComponent(url.replace(/\s/g, ''));
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const news = JSON.parse(data.contents).articles
        setArticles(news)
      }).finally(() => setIsLoading(false))
    // navigate('/')
  }

  const handleSourceClick = (sourceId) => {
    let url = `https://newsapi.org/v2/top-headlines?
                apiKey=${NEWS_API_KEY}&
                sources=${sourceId}&
                page=1&
                pageSize=15`;
    url = proxy + encodeURIComponent(url.replace(/\s/g, ''));
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const news = JSON.parse(data.contents).articles
        setArticles(news)
      }).finally(() => setIsLoading(false))
  }

  return (
    <div className='vh-100'>
      <Header />
      <Navbar 
        onNavigate={handleCategoryClick}
        onSearch={handleQuery}
        onCountryChange={handleCountryChange}
        onLanguageChange={handleLanguageChange}
        category={category}
      />
      <div className='d-flex'>
        <Sources sourcesList={sources} onSourceClick={handleSourceClick}/>
        <Routes>
          <Route path="/" element={<NewsList title={category} articles={articles} isLoading={isLoading}/>} />
          <Route path="/saved" element={<SavedArticles />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
