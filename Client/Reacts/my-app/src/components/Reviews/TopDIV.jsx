
import react from 'react'
import {useState, useEffect, useRef} from 'react'
import styled from "styled-components"
import {Reviews} from "./Reviews.jsx"

//


export const TopDiv = styled.div`
  display: flex;
  width: 100%;
  height: px;
  /* border: 3px solid black; */
`
export const NumberViews = styled.div`
  display:flex;
  align-items: center;
  width: auto;
  height: 35px;
  margin: 10px 10px 0px 45px;
`
export const SortReview = styled.div`
  display:flex;
  align-items: center;
  width: 25%;
  height: 35px;
  margin: 10px 0 0px 10px;
`
export const DropdownButton = styled.button`
  background-color: #eaeaea;
  color: solid black;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
`
export const DropdownContent = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`
export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`

export const TopSection = ({reviewProduct, HandleSortOption, isOpen, toggleDropDown, sortOption, numberReviews}) => {

    // const [numReviews, setNumReviews] = useState(numberReviews)

    // useEffect(() => {
    //   if(numberReviews !== undefined) {
    //     console.log("number of reviews: ", numReviews)
    //     setNumReviews(numberReviews)
    //   }

    // }, [])
    return (
        <>
          <TopDiv>
            <NumberViews>
              {numberReviews} Reviews
            </NumberViews>

            <SortReview>
              <DropdownButton onClick = {(e) => toggleDropDown(e)}>
                Sort By: {sortOption}
              </DropdownButton>
              {isOpen && (
              <DropdownContent>
                <DropdownItem onClick={() => HandleSortOption('helpful')}>
                  Helpful
                </DropdownItem>
                <DropdownItem onClick={() => HandleSortOption('newest')}>
                  Newest
                </DropdownItem>
                <DropdownItem onClick={() => HandleSortOption('relevant')}>
                  Relevant
                </DropdownItem>
              </DropdownContent>
            )}
            </SortReview>
          </TopDiv>
        </>
    )
}