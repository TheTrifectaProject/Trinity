import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import {AddReview} from "/Users/andrewliu/FEC-Sprint/Client/Reacts/my-app/src/components/Reviews/AddReview.jsx"
 
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
  font-size: 16px;
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
  font-size: 24px;
  overflow: hidden;
  word-wrap: break-word;
`
export const FullReview = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 100%;
  border: 2px solid black;
  margin: 0px 0 0 0;
  overflow: hidden;
  word-wrap: break-word;
`
export const Recommend = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  border: 1px solid black;
  margin: 7px 0 0 0;
`
export const isHelpful = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  border: 1px solid black;
  margin: 7px 0 0 0;
`
export const Yes = styled.button`
  /* Styles for the button */
  background-color: transparent;
  border: none;
  cursor: pointer;

  /* Styles for the underlined text */
  text-decoration: underline;

  /* Add any additional styles you need */
`;
export const CardResponse = styled.div`
  display:flex;
  flex-direction: column;
  height: 50px;
  width: 97%;
  border: 2px solid black;
  background-color: lightgrey;
  padding: 10px;  
  overflow: auto;
  word-wrap: break-word;
`
export const StarIcon = styled.span`
  margin: 1px;
  &:before {
    content: '★'; 
  }
`
const EmptyStarIcon = styled.i`
  /* Custom CSS styles for the empty star icon */
  font-family: 'Font Awesome'; /* Assuming you have Font Awesome included in your project */
  font-style: normal;
  &:before {
    content: '\f006'; /* Unicode character for an empty star in Font Awesome */
  }
`;

function generateStarIcons(count) {
    const empty = 5 - count;
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<StarIcon key={i} />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<EmptyStarIcon key={i} />)
    }
    return stars;
  }

export const Card = ({review}) => {
    console.log(review);
    const [body, setBody] = useState();
    const [dateName, setDateName] = useState();
    const [help, setHelp] = useState();
    const [photos, setPhotos] = useState();
    const [rating, setRating] = useState();
    const [recommend, setRecommend] = useState();
    const [response, setResponse] = useState();
    const [id, setId] = useState();
    const [summary, setSummary] = useState();

    useEffect(() => {
      setBody(review.body)
      setDateName(ReviewDate())
      setHelp(review.helpfulness)
      setPhotos(review.photos)
      setRating(review.rating)
      setRecommend(review.recommend)
      setResponse(review.response)
      setId(review.reviewer_id)
      setSummary(review.summary)
    }, [{review}])

    const ReviewDate = () => {
        const date = new Date(review.date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const dateName = review.reviewer_name + ', _' + formattedDate
        return dateName;
    }

    const truncateSummary = () => {
      if(summary) {
        if(summary.length > 60) {
          setSummary(summary + '...')
          return summary;
        } else {
          return summary;
        }
      }
    }

    const rec = () => {
      return "I recommend this product"
    }

    const HandleYesClick = () => {
      //some sort of axios put request 
      console.log("clicked yes!")
    }

    return (
        <>
            <ReviewCard>
                <CardTop>
                  <p>
                      {generateStarIcons(rating)}
                  </p>
                  <p>
                      {ReviewDate()}
                  </p>
                </CardTop> 

                <CardSummary>
                  <h5>{truncateSummary()}</h5>
                </CardSummary>

                <FullReview>
                  <p>{body}</p>
                
                </FullReview>
                {recommend ? 
                    <Recommend>{rec()}</Recommend>
                      : null}

                {response ? 
                    <CardResponse>
                    Response:
                    <p>{response}</p>
                    </CardResponse>
                : null}

                <isHelpful>
                    Was this review helpful?
                    <Yes onClick = {HandleYesClick}>Yes </Yes>
                    {help}
                </isHelpful>

            </ReviewCard>
        </>
        
    )

}