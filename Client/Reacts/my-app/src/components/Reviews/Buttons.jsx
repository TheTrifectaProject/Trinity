

import react from 'react'
import {useState} from 'react'
import styled from "styled-components"

export const AddMoreButtonDiv = styled.div`
  display: flex; /* Set display to flex */
  justify-content: center;
  align-items: center; /* Center the content horizontally */
  width: 100%;
  height: 120px;
  border: 3px solid black;
`
export const NewButton = styled.div`
  display: flex; /* Set display to flex */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  height: 85px;
  width: 150px;
  border: 1px solid black;
  padding: 0 20px;
  margin: 15px;
`
export const MoreButton = styled.div`
  display: flex; /* Set display to flex */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  height: 85px;
  width: 150px;
  border: 1px solid black;
  padding: 0 20px;
  margin: 15px;
`

export const Buttons = ({HandleMoreButton, AddView}) => {
    return (
        <>
        <AddMoreButtonDiv>
            <MoreButton onClick = {(e) => HandleMoreButton(e)}>
            MORE REVIEWS
            </MoreButton>

            <NewButton onClick = {(e) => AddView(e)}>
            ADD REVIEW +
            </NewButton>
        </AddMoreButtonDiv> 
        </>
    )
}