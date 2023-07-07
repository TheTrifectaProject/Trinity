import styled from "styled-components"
import {useState, useEffect} from 'react'
import {TopSection} from "./TopDIV.jsx"
import {Buttons} from "./Buttons.jsx"
import {RBreakdown} from "./RBreakdown.jsx"
import {Card} from "./ReviewCard.jsx"
import {fetchMeta, fetchReviews, fetchProduct} from "./fetch.js"
import {AddReview} from "./AddReview.jsx"
import { TopDiv } from './TopDIV.jsx'


export const ReviewsDIV = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  height: auto;
  margin-left: 12%;
  margin-right: 75px;
  border: 3px solid red;
`
export const MainDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: auto;
  /* border: 3px solid blue; */
`
export const ExpandedMainDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: auto;
  /* border: 3px solid blue; */
`
export const Reviews = ({currentProductId}) => {
  const [productId, setProductId] = useState();
  const [header, setHeader] = useState("");
  const [reviewProduct, setReviewProduct] = useState();
  const [numberReviews, setNumberReviews] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [productMeta, setProductMeta] = useState();
  const [allReviews, setAllReviews] = useState(false);
  const [sortOption, setSortOption] = useState('relevant')
  const [add, setAdd] = useState(false)

  //currentProductID find to see if there are number of Reviews inside that.
  useEffect(() => {
    fetchReviews(1, 100, sortOption, currentProductId)
      .then((reviews) => {
        setReviewProduct(reviews)
        setNumberReviews(reviews.results.length);
        setProductId(currentProductId)
      })

      .catch((error) => {
        console.error(error);
      });

    fetchMeta(currentProductId)
      .then((reviews) => {
        setProductMeta(reviews);
      })
      .catch((error) => {
        console.error(error);
      });
    fetchProduct(currentProductId)
      .then((data) => {
        console.log("product: ", data.name);
        setHeader("Write your review about " + data.name);
      })
      .catch((error) => {
        console.error(error.response.data);
      })
  }, [sortOption])

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

  const toggleDropDown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const HandleSortOption = (option) => {
    console.log(option)
    setIsOpen(!isOpen);
    setSortOption(option)
  }

  const HandleReportUpdate = () => {
    fetchReviews(1, 100, sortOption, currentProductId)
      .then((reviews) => {
        setReviewProduct(reviews)
        setNumberReviews(reviews.results.length)
      });

  }

  if (reviewProduct && productMeta && allReviews) {
    return (
      <>
        <div key={reviewProduct.id} style={{ display: 'flex' }}>
          <RBreakdown reviewProduct={reviewProduct.results} productMeta = {productMeta}/>

          <ExpandedMainDiv>

            <TopSection reviewProduct={reviewProduct.results} productMeta = {productMeta}
             HandleSortOption={HandleSortOption} isOpen = {isOpen} toggleDropDown = {toggleDropDown}
             sortOption = {sortOption} numberReviews = {numberReviews}/>

            {reviewProduct.results.map((review) => {
                return <Card review={review} productId = {productId} HandleReportUpdate = {HandleReportUpdate}/>
            })}

            <Buttons reviewProduct={reviewProduct.results} productMeta = {productMeta}
              HandleMoreButton = {HandleMoreButton}
              AddView = {AddView}/>

          </ExpandedMainDiv>
          {add ? (console.log("current product id: ", productId),
              <AddReview reviewProduct={reviewProduct.results} AddView = {AddView}
               productMeta = {productMeta} productId = {productId} header = {header}/>)
            : null }
        </div>
      </>
    );
  } else if (reviewProduct && productMeta && !allReviews) {
    return (
      <>
        <div key={reviewProduct.id} style={{ display: 'flex' }}>
          <RBreakdown reviewProduct={reviewProduct.results} productMeta = {productMeta}/>

          <MainDiv>

            <TopSection reviewProduct={reviewProduct.results} productMeta = {productMeta}
            HandleSortOption = {HandleSortOption} isOpen = {isOpen} toggleDropDown = {toggleDropDown}
            sortOption = {sortOption} numberReviews = {numberReviews}/>

            <Card review={reviewProduct.results[0]} productId = {productId} HandleReportUpdate = {HandleReportUpdate}/>
            <Card review={reviewProduct.results[1]} productId = {productId} HandleReportUpdate = {HandleReportUpdate}/>

            <Buttons reviewProduct={reviewProduct.results} productMeta = {productMeta}
              HandleMoreButton = {HandleMoreButton}
              AddView = {AddView}/>

          </MainDiv>

          {add ? (console.log("current product id: ", productId),
              <AddReview reviewProduct={reviewProduct.results} AddView = {AddView}
              productMeta = {productMeta} productId = {productId} header = {header}/>)
            : null }
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