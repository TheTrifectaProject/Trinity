import react from 'react'

import {useState} from 'react'

//looks good im trying to see where to put the styled componenets TRUE we can do either or but i do want to try the oter one  
//lets use styled components?  yup bet
//LOL BRO      i was literally thinking about that 
//FIX UR THING WHERE THE CODE GETS ALL MESSED UP LOL :P
//IM GOING TO IMPORT THIS FILE INTO THE APP.js
//i did two child divs inside the "nav--bar" so we can flex them, logo on the left side, and the search bar on the right hand side

const SearchButton = styled.button`
background-color: #645cfc;
border: none;
padding: 10px;
color: white;
`

const Nav = () => {
    return ( 
        <div className = "nav--bar" >
            <div className = "nav-logo" >
                <img> </img>
            </div>

            <div className = "nav--search" >
                <input placeholder = 'search' > </input>
                <SearchButton>🔎</SearchButton> 
            </div>

        </div>
    )
}


const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default StyledNav 