import react from 'react'
import {useState} from 'react'
import Nav from './components/Nav/Nav.jsx'
import Overview from './components/Overview/Overview.jsx'
import RelatedItems from './components/RelatedItems/RelatedItems.jsx'
import Questions from './components/Q&A/Questions.jsx'
import Reviews from './components/Reviews/Reviews.jsx'

const App = () => {
  return (
  <div className = "App" >
    <Nav />
    <Overview />
    <RelatedItems />
    <Questions />
    <Reviews />
    </div>
  )
}

export default App;