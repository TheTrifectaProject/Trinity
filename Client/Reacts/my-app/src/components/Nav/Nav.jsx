import react from 'react'
import styled from "styled-components"
import {useState} from 'react'


//GIT BRANCH UPDATE
const SearchButton = styled.button`
background-color: lightblue;
border: none;
color: white;
height: 36px;
padding-right: 15px;
padding-left: 15px;
margin-top: 27px;
margin-left:3px;
border: .5px solid black;
border-radius: 10px;
`
const Navdiv = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
height: 80px;
position: relative;
border: 1px solid black;
border-radius: 10px;
margin-left: 100px;
margin-right: 100px;
background-color: whitesmoke;
 `
const Logodiv = styled.div`
border:solid;
color:red;
margin-left: 20px;
 `
const Searchdiv = styled.div`
width: 25%;
display:flex;
flex-direction: row;
justify-content: space-between;
justify-items: center;
margin-right: 20px;
`
const SearchInput = styled.input`
/* margin:10px; */
height: 30px;
margin-top: 27px;
width:82%;
`


const Nav = () => {
    return (
        <Navdiv>
            <Logodiv>
                logo goes here
               <img/>
            </Logodiv>

            <Searchdiv>
                <SearchInput placeholder = 'search'></SearchInput>
                <SearchButton>🔎</SearchButton>
            </Searchdiv>

        </Navdiv>

    )
}


const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default StyledNav