import './App.css'
import Card from '../src/components/Card'
import data from './data'
function App() {

  let cards = data.map(e=>{
    return (
      <Card 
        {...e}
      />
    )
  })

  return (
    <div className="App">
      <header className='bg-red-400 p-10 flex justify-center'> <div className='text-xl text-white'>mytraveljournal</div></header>
       {cards}
    </div>
  )
}

export default App
