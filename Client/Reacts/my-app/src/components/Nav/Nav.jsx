import styled from "styled-components"
import react, {useState} from 'react'
import {NavbarContainer, Logodiv, Searchdiv, SearchInput, SearchButton, Logoimg} from '../styles/Nav.style.jsx'
import logo from '../../shopping-bag-308552_1280.png'


const Nav = () => {

    return (
        <NavbarContainer>
            <Logodiv>
               <Logoimg src={logo}></Logoimg>
            </Logodiv>

            <Searchdiv>
                <SearchInput placeholder = 'search'></SearchInput>
                <SearchButton>🔎</SearchButton>
            </Searchdiv>
        </NavbarContainer>
    )
}




export default Nav