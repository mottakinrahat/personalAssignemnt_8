import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Card from './component/Card/Card'
import NameContainer from './component/nameContainer/NameContainer'

function App() {
  const[show,setShow]=useState([]);
  
  const BookmarkItem=(Title)=>{

   setShow(Title);
 }

  return (
    <div className="App">
    <Header />

    <div className='flex justify-between p-20 gap-5'>
            <div className='w-3/5 border-2 border-indigo-200 rounded-xl'>
             <Card BookmarkItem={BookmarkItem}/>
            </div>

            <div className='w-2/5 border-2 border-indigo-200 rounded-xl'>
           <NameContainer show={show}/>
            </div>
    </div>

    </div>
  )
}

export default App
