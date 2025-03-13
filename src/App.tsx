import {useEffect, useState} from 'react'
import { getArticles } from "./callback/api.js"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles()
            .then((data) => setArticles(data.data))
            .catch((error) => console.log(error))
    }, []);
  return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
          <h2>Funktioniert es?</h2>
          <div>
              <h1>Artikel aus Strapi</h1>
              {articles.map((article) => (
                  <div key={article.id}>
                      <h2>{article.attributes.title}</h2>
                      <p>{article.attributes.content}</p>
                  </div>
              ))}
          </div>
      </>
  )
}

export default App
