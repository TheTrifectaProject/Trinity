import react from 'react'
import {useState} from 'react'
import Nav from './components/Nav/Nav.js'
import Overview from './components/Overview/Overview.js'
import RelatedItems from './components/RelatedItems/RelatedItems.js'
import Questions from './components/Q&A/Questions.js'
import Reviews from './components/Reviews/Reviews.js'

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