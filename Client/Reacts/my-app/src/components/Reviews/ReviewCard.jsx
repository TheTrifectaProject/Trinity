import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import {AddReview} from "/Users/andrewliu/FEC-Sprint/Client/Reacts/my-app/src/components/Reviews/AddReview.jsx"
import {updateHelpful, report} from './fetch.js'
 //

export const ReviewCard = styled.div`
  display:flex;
  flex-direction: column;
  height: auto;
  width: 90%;
  border-bottom: 2px solid black;
  margin: auto; 
`
export const CardTop = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
`
export const CardSummary = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  /* border: 2px solid black; */
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
  /* border: 2px solid black; */
  margin: 0px 0 0 0;
  overflow: hidden;
  word-wrap: break-word;
`
export const Photos = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 100%;
  /* border: 2px solid red; */
`
export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
  /* border: 1px solid black;  */
`;
export const Recommend = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  /* border: 1px solid black; */
  margin: 7px 0 10px 0;
`
export const IsHelpful = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25px;
  width: 100%; 
  /* border: 1px solid black; */
  margin: 7px;
`
export const ReportDiv = styled.div`
  display: flex;
  height: 90%;
  width: 50%; 
  /* border: 1px solid black; */
`
export const Yes = styled.button`
  /* Styles for the button */
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
`;

export const ReportButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 7px;
`
export const CardResponse = styled.div`
  display:flex;
  flex-direction: column;
  height: 50px;
  width: 97%;
  /* border: 2px solid black; */
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

function generateStarIcons(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }

export const Card = ({review, HandleReportUpdate, productId}) => {
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
      setId(review.review_id)
      setSummary(review.summary)
    }, [review])

    const ReviewDate = () => {
        const date = new Date(review.date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const dateName = review.reviewer_name + ', ' + formattedDate
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
      console.log("clicked yes!: ", id);
      updateHelpful(id)
        .then((reviews) => {
          setHelp(help + 1);
          console.log("Handle Yes Click", reviews);
        })
        .catch((error) => {
          console.error(error);
        });
      
    }

    const HandleReport = () => {
      report(id)
        .then((reviews) => {
          HandleReportUpdate();
          console.log("Handle Yes Click", reviews);
        })
        .catch((error) => {
          console.error(error);
        });
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
              {photos ?
              <Photos>
                {photos.map((photo, index) => {
                  return <Thumbnail key={index} src={photo.url}/>
                })} 
              </Photos> : null}
              {recommend ? 
                  <Recommend>{rec()}</Recommend>
                    : null}

              {response ? 
                  <CardResponse>
                  Response:
                  <p>{response}</p>
                  </CardResponse>
              : null}

            <IsHelpful>
      
                Was this review helpful?
                <Yes onClick={HandleYesClick}>Yes</Yes>
                {help} | 
                <ReportDiv>
                  <ReportButton onClick = {HandleReport}>report</ReportButton>
                </ReportDiv>
              
            </IsHelpful>

          </ReviewCard>
        </>
    )
}