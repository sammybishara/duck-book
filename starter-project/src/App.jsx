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

  const [posts, setPosts] = useState([
    {id: 1, author: `Daffy`, content: `Just got a new pond!`},
    { id: 2, author: `Donald`, content: `Quack attack at 3pm. Who's in?`},
    {id: 3, author: `Scrooge`, content: `Investing in breadcrumbs`}
  ]);

  const [showForm, setShowForm] = useState(true);

  function addPost(newPost) {
    setPosts([{id: Date.now(), ...newPost }, ...posts]);
  }

  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label = "Add Friend" />
      <DuckButton label = "Message" />
      <DuckButton label = "Waddle Away" />
      <hr />
      <button onClick = {() => setShowForm(!showForm)} style = {{
        marginBottom: `irem`,
        backgroundColor: `#2196f3`,
        color: `white`,
        border: `none`,
        padding: `0.5rem 1rem`,
        borderRadius: `4px`,
        cursor: `pointer`
      }}>
        {showForm ? 'Hide Post Form' : 'Show Post Form'}
      </button>
      {showForm && <PostForm onSubmit = {addPost}/>}
      {posts.map(post => (
        <Post key = {post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
  )
}

export default App
