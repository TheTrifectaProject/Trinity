import react from 'react'
import styled from "styled-components"
import {useState, useEffect} from 'react'
import {TopSection} from "./TopDIV.jsx"
import {Buttons} from "./Buttons.jsx"
import {RBreakdown} from "./RBreakdown.jsx"
import {Card} from "./ReviewCard.jsx"
import {fetchMeta, fetchReviews} from "/Users/andrewliu/FEC-Sprint/Client/Reacts/my-app/src/components/Reviews/fetch.js"
import {AddReview} from "/Users/andrewliu/FEC-Sprint/Client/Reacts/my-app/src/components/Reviews/AddReview.jsx"

export const ReviewsDIV = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  height: auto;
  border: 3px solid red;
  `

export const MainDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-end;
  width: 100%;
  height: auto;
  border: 3px solid blue;
`

export const ExpandedMainDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-end;
  width: 100%;
  height: auto;  
  border: 3px solid blue;
  
`

export const Reviews = () => {
  const [reviewProduct, setReviewProduct] = useState()
  const [productMeta, setProductMeta] = useState();
  const [allReviews, setAllReviews] = useState(false);
  const [add, setAdd] = useState(false)
 
  useEffect(() => {
    fetchReviews(1, 5, 'relevant', 40347)
      .then((reviews) => {
        setReviewProduct(reviews);
      })
      .catch((error) => {
        console.error(error);
      });
    
    fetchMeta(40347)
      .then((reviews) => {
        setProductMeta(reviews);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const HandleMoreButton = (e) => {
    e.preventDefault();
    console.log("list of reviews: ", reviewProduct.results)
    console.log("show all reviews? ", allReviews)
    if(reviewProduct.results.length > 2) {
      setAllReviews(!allReviews);
    }
  }
  
  const AddView = (e) => {
    e.preventDefault();
    setAdd(!add)

  }


  if (reviewProduct && productMeta && allReviews) {
    return (
      <>
        <div key={reviewProduct.id} style={{ display: 'flex' }}>
          <RBreakdown reviewProduct={reviewProduct.results} productMeta = {productMeta}/>

          <ExpandedMainDiv>

            <TopSection reviewProduct={reviewProduct.results} productMeta = {productMeta} />

            {reviewProduct.results.map((review) => {
                return <Card review={review} />
            })}

            <Buttons reviewProduct={reviewProduct.results} productMeta = {productMeta} 
              HandleMoreButton = {HandleMoreButton}
              AddView = {AddView}/>

          </ExpandedMainDiv>
        </div>
      </>
    );
  } else if (reviewProduct && productMeta && !allReviews) {
    return (
      <>
        <div key={reviewProduct.id} style={{ display: 'flex' }}>
          <RBreakdown reviewProduct={reviewProduct.results} productMeta = {productMeta}/>

          <MainDiv>

            <TopSection reviewProduct={reviewProduct.results} productMeta = {productMeta} />

            <Card review={reviewProduct.results[0]} />
            <Card review={reviewProduct.results[1]} />

            <Buttons reviewProduct={reviewProduct.results} productMeta = {productMeta} 
              HandleMoreButton = {HandleMoreButton}
              AddView = {AddView}/>
            {add ? 
              <AddReview />
            : null }

          </MainDiv>
        </div>
      </>
    )
  } else {
    return (
      <h1>
        No Reviews
      </h1>
    )
  }
}

export default Reviews; 