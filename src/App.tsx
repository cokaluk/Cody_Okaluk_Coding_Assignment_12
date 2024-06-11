import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton/MyButton'
import MyImage from './stories/components/MyImage/MyImage'
import testImage from './assets/test.jpg'
import MyText from './stories/components/MyText/MyText'
import MySectionItem from './stories/components/MySectionItem/MySectionItem';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton></MyButton>
      <MyImage src={testImage} shape="circle"></MyImage>
      <MyText text="Hello, World" bold disabled></MyText>

      <MySectionItem
        Image={<MyImage src={testImage} shape="circle"></MyImage>}
        HeaderText="this is a header"
        BodyText="and this is the body text!, Hello World"
        ></MySectionItem>
    </>
  )
}

export default App
