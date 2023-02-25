import { useState } from 'react'
import './App.css'
import SingleContent from './components/singleContent'
import data from './data/data'

function App() {

    const [content,setContent] =useState(data)
    return (
      <main>
        <div className='containner'>
          <h3>เครื่องมือพัฒนาเว็บปี 2023</h3>
          <section>
            {content.map((data)=>{
              return <SingleContent key={data.id} {...data}/>
            })}
          </section>
        </div>
      </main>
    )
}

export default App
