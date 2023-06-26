import react from 'react'
import {useState} from 'react'
import styled from "styled-components"
import Nav from './components/Nav/Nav.jsx'
import Overview from './components/Overview/Overview.jsx'
import RelatedItems from './components/RelatedItems/RelatedItems.jsx'
import Questions from './components/Q&A/Questions.jsx'
import Reviews from './components/Reviews/Reviews.jsx'

const AppDIV = styled.div`
display:flex;
flex-direction: column;
align-items: center;`

const App = () => {
  return (
    <AppDIV>
      <Nav />
      <Overview />
      <RelatedItems />
      <Questions />
      <Reviews />
    </AppDIV>


  )
}

export default App;