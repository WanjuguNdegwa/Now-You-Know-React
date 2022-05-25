import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [category, setCategory] = useState('general')
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('us')
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const [articles, setArticles] = useState([])
  const articlesRef = useRef(articles)

  useEffect(() => {
    const proxy = 'https://api.allorigins.win/get?url='
    let url = `https://newsapi.org/v2/top-headlines?
                q=${query}&
                apiKey=${NEWS_API_KEY}&
                country=${country}&
                category=${category}&
                limit=15`;
    url = proxy + encodeURIComponent(url.replace(/\s/g, ''));

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const news = JSON.parse(data.contents).articles
        // console.log(news);
        setArticles(news)
      })
  }, [articlesRef.current, category, query, country, NEWS_API_KEY])

  const handleCategoryClick = (c) => {
    setCategory(c);
  }

  const handleCountryChange = (c) => {
    setCountry(c);
  }

  const handleQuery = (q) => {
    setQuery(q);
  }

  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:4000/tasks/${id}`)
  //   const data = await res.json()

  //   return data;
  // }

  // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch("http://localhost:4000/tasks", {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task)
  //   })

  //   const newTask = await res.json()
  //   setTasks([...tasks, newTask])
  // }

  // Delete Task
  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:4000/tasks/${id}`, {
  //     method: 'DELETE'
  //   })

  //   setTasks(tasks.filter((task) => task.id !== id))
  // }

  // Toggle Reminder
  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTask(id);
  //   const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  //   const res = await fetch(`http://localhost:4000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updatedTask)
  //   })

  //   const data = await res.json()

  //   setTasks(
  //     tasks.map((task) => 
  //       task.id === id ? 
  //         {...task, reminder: data.reminder} :
  //         task
  //   ))
  // }

  return (
    <Router>
      <Header />
      <Navbar 
        onNavigate={handleCategoryClick} 
        onSearch={handleQuery} 
        onCountryChange={handleCountryChange} 
      />
      <Routes>
        <Route path="/" element={<NewsList articles={articles} />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
