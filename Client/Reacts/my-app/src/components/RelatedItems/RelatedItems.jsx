import react from 'react'
import {useState} from 'react'
import styled from "styled-components"

const RIDIV = styled.div`
width: 100%;
display:flex;
height:200px;
border: 1px solid black;
`

const RelatedItems = () => {
  return (
    <RIDIV>
      related items Div
    </RIDIV>
  )
}

export default RelatedItems;