import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';
import PostForm from './PostForm';
import Post from './Post';

function App() {
  const [count, setCount] = useState(0)

  const posts = [
    {id: 1, author: `Daffy`, content: `Just got a new pond!`},
    { id: 2, author: `Donald`, content: `Quack attack at 3pm. Who's in?`},
    {id: 3, author: `Scrooge`, content: `Investing in breadcrumbs`}
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label = "Add Friend" />
      <DuckButton label = "Message" />
      <DuckButton label = "Waddle Away" />
      <hr />
      <PostForm />
      {posts.map(post => (
        <Post key = {post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
    </>
  )
}

export default App
