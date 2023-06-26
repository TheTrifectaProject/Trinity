import react from 'react'
import {useState} from 'react'
import styled from "styled-components"
import KeySearch from "./KeySearch.jsx"
import NewReview from "./NewReview.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import RatingBreakdown from "./RBreakdown.jsx"
import ReviewTile from "./ReviewTile.jsx"
import SortOption from "./SortOptions.jsx"


export const ReviewsDIV = styled.div`
width: 100%;
  display:block;
  flex-direction: column;
  height:800px;
  border: 3px solid black;
  `
export const RBreakdownDiv = styled.div`
  display:flex;
  flex-direction: column;
  width: 35%;
  height: 570px;
  border: 3px solid black;
  margin: 63px 0 0 0;
  `
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px black;
`
export const RatingText = styled.h1`
  font-size: 50px;
  margin: 25px 0 0px 25px;
`
export const AverageStar = styled.div`
  display:flex;
  width: 100px;
  height: 30px;
  margin: 10px 0 10px 10px;
`
export const StarIcon = styled.span`
  margin: 1px;
  &:before {
    content: '★'; 
  }
`
export const PercentRec = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 220px;
  border: 1px solid black;
  margin: 15px;
`
export const StarDivide = styled.div`
  display:flex;
  flex-direction: column;
  height: 220px;
  width: 220px;
  border: 1px solid black;
  margin: 0px 15px 15px 15px;
`
export const NumberStar = styled.div`
  display:flex;
  align-items: center;
  height: 50px;
  width: 200px;
  border: 1px solid black;
  margin: 0px 10px 0px 10px;
`
export const Expectation = styled.div`
  display:flex;
  flex-direction: column;
  height: 180px;
  width: 220px;
  border: 1px solid black;
  margin: 0px 15px 15px 15px;
`

export const SizeComfort = styled.div`
  display:flex;
  height: 80px;
  width: 200px;
  border: 1px solid black;
  margin: 10px 10px 10px 10px;
`

export const TopDiv = styled.div`
  display: flex;
  width: 100%;
  height: px;
  border: 3px solid black;
`
export const NumberViews = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 35px;
  border: 1px solid black;
  margin: 10px 0 10px 38px;
`
export const SortReview = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 35px;
  border: 1px solid black;
  margin: 10px 0 10px 38px;
`
// const SearchDIV = styled.div`
// display:block;
// float: right;
// justify-content:center;
// align-items:center;
// width: 50%;
// height: 50px;
// border: 3px solid black;
// `

export const MainDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-end;
  width: 100%;
  height: 800px;
  border: 3px solid black;
`

export const ReviewCard = styled.div`
  display:flex;
  flex-direction: column;
  height: 250px;
  width: 90%;
  border: 2px solid black;
  margin: auto; 
`
export const CardTop = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  border: 2px solid black;
`
export const CardSummary = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  border: 2px solid black;
  margin: 5px 0 0 0;
`
export const FullReview = styled.div`
  display:flex;
  height: 75px;
  width: 100%;
  border: 2px solid black;
  margin: 5px 0 0 0;
`
export const CardResponse = styled.div`
  display:flex;
  flex-direction: column;
  height: 50px;
  width: 97%;
  border: 2px solid black;
  background-color: lightgrey;
  padding: 10px;
`



export const AddMoreButtonDiv = styled.div`
  display: flex; /* Set display to flex */
  justify-content: center;
  align-items: center; /* Center the content horizontally */
  width: 100%;
  height: 20%;
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

const Reviews = () => {
  return (
  <ReviewsDIV>

      <div style={{ display: 'flex' }}>
      <RBreakdownDiv>

          <RatingContainer>
            <RatingText>3.5</RatingText>
            <AverageStar>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </AverageStar>
          </RatingContainer>

          <PercentRec>
            100% recommend using product
          </PercentRec>

          <StarDivide>
            <NumberStar>5 stars</NumberStar>
            <NumberStar>4 stars</NumberStar>
            <NumberStar>3 stars</NumberStar>
            <NumberStar>2 stars</NumberStar>
            <NumberStar>1 star</NumberStar>
          </StarDivide>

          <Expectation>
            <SizeComfort>Size</SizeComfort>
            <SizeComfort>Comfort</SizeComfort>
          </Expectation>

        </RBreakdownDiv>

          <MainDiv>

            <TopDiv>
              <NumberViews>
                200 Reviews
              </NumberViews>
              <SortReview>
                Sort By:
              </SortReview>
            </TopDiv>

            <ReviewCard>
              <CardTop>
                <p>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </p>
                <p>
                  (verified) User, 10/10/2003
                </p>
              </CardTop>
            </ReviewCard>

            <ReviewCard>
              <CardTop>
                <p>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </p>
                <p>
                  (verified) User, 10/10/2003
                </p>
              </CardTop>
              <CardSummary><h5>Hello there.</h5></CardSummary>
              <FullReview><p>Hello there. I am Andrew.</p></FullReview>
              <CardResponse>
                Response:
                <p>No I am Not!</p>
              </CardResponse>
            </ReviewCard>

            <AddMoreButtonDiv>
              <MoreButton>
                MORE REVIEWS
              </MoreButton>

              <NewButton>
                ADD REVIEW +
              </NewButton>
            </AddMoreButtonDiv>
           
          </MainDiv>
        </div>


  </ReviewsDIV>
  
  )
}

export default Reviews; 