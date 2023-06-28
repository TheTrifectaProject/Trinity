import styled from "styled-components"

export const NavbarContainer  = styled.nav`
display: flex;
flex-direction:row;
justify-content: space-between;
justify-self: center;
height: 80px;
width: 100%;
position: relative;
border-radius: 10px;
background-color: whitesmoke;
box-shadow: 0 3px 5px 0 rgba(0,0,0,.2);
`

 export const Logodiv = styled.div`

margin-left: 20px;
width: 25%;
 `;

  export const Searchdiv = styled.div`
 width: 300px;
 display:flex;
 flex-direction: row;
 justify-content: space-between;
 justify-items: center;
 margin-right: 20px;
 `
  export const SearchInput = styled.input`
 /* margin:10px; */
 height: 30px;
 margin-top: 27px;
 width:82%;
 `;

 export const SearchButton = styled.button`
background-color: lightblue;
border: none;
color: white;
height: 36px;
padding-right: 15px;
padding-left: 15px;
margin-top: 27px;
margin-left:3px;
border: .5px solid black;
border-radius: 35px;
`;

export const Logoimg = styled.img`
width:150px;
height:80px;
`