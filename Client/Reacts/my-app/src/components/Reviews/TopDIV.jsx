
import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"


export const TopDiv = styled.div`
  display: flex;
  width: 100%;
  height: px;
  border: 3px solid black;
`
export const NumberViews = styled.div`
  display:flex;
  align-items: center;
  width: 10%;
  height: 35px;
  margin: 10px 0 0px 40px;
`
export const SortReview = styled.div`
  display:flex;
  align-items: center;
  width: 25%;
  height: 35px;
  margin: 10px 0 0px 10px;
`

export const TopSection = ({reviewProduct}) => {
    const [totalReviews, setTotalReviews] = useState()
    const [sortOption, setSortOption] = useState('Relevance')

    useEffect(() => {
        setTotalReviews(reviewProduct.length + ' Reviews,')
    }, [])

    return (
        <>
            <TopDiv>
              <NumberViews>
                {totalReviews}
              </NumberViews>
            
              <SortReview>
                Sort By: {sortOption}
              </SortReview>
            </TopDiv>
        </>
    )
}