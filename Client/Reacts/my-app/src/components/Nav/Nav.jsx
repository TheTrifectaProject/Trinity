import react from 'react'
import styled from "styled-components"
import {useState} from 'react'
import {NavbarContainer, Logodiv, Searchdiv, SearchInput, SearchButton, Logoimg} from '/Users/mexicanpepe/FEC-Sprint/Client/Reacts/my-app/src/styles/Nav.style.js'
import logo from '/Users/mexicanpepe/FEC-Sprint/Client/Reacts/my-app/src/nav-logo.png'


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