
//
import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import {fetchProduct, postReview} from "./fetch.js"


export const AddWindow = styled.div`
    /* Styles for the modal window */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
export const CloseWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
  height: 20px;
  width: 20px;
  margin: 7px 0 0 0;
  background-color: #DCDCDC;
`
export const AddDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 80%;
    background-color: white;
    margin: auto;
    overflow: auto; /* Add this line */

`
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 75px;
  margin: 20px 0 0 45px;
  font-size: 44px;
  /* border: 1px solid black; */
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: 10%;
  margin: 0px 0 0 10px;
  font-size: 44px;
  /* border: 1px solid black;   */
`
export const OverallRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 40px;
  border: 1px solid black;
  margin: px 0 0 0; 
  
`
export const YesNo = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  margin: 0 6px 0 6px;

`
export const RecommendProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`
export const CharacteristicsDIV = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 20%;
  border: 1px solid black;
`
export const EachCharacteristics = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 25px;
  width: 50%;
  border-bottom: 1px solid black;
  margin: 0 0 2px 0;
`
export const CheckboxContainer = styled.div`
  height: 100%;
  width: 70%;
`
export const ReviewSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  height: 10%;
  border: 1px solid black;    
`
export const SummaryTextBox = styled.input`
  width: 75%;
  height: 50px;
  border: 1px solid black;
`
export const ReviewBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  height: 25%;
  border: 1px solid black;    
`
export const FullTextBox = styled.input`
  width: 75%;
  height: 200px;
  border: 1px solid black;
`
export const UploadPhotos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 5%;
  border: 1px solid black; 
`
const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin-top: 10px;
  /* border: 1px solid black;  */
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border: 1px solid black; 

`;
export const Nickname = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  /* border: 1px solid black; */
  margin: 10px 0 0 0;     
`
export const Email = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  /* border: 1px solid black;   */
`
export const SubmitReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 6%;
  border: 1px solid black;  
  margin: 25px 0 0 0;  
`
export const RatingButton = styled.button`
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: none;
  cursor: pointer;
  border-radius: 50px;

`;
export const YesNoButton = styled.button`
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'dark grey')};
  border: none;
  cursor: pointer;
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: underline;
`;

export const CharactertisticButton = styled.button`
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: none;
  cursor: pointer;
  margin-left: 5px;
`

// export const 

export const AddReview = ({productId, AddView, productMeta, header}) => {

    const [productName, setProductName] = useState("");
    const [stars, setStars] = useState("")
    const [recommend, setRecommend] = useState("")
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [Size, setSize] = useState('')
    const [Width, setWidth] = useState('');
    const [Comfort, setComfort] = useState('');
    const [Quality, setQuality] = useState('');
    const [Length, setLength] = useState('');
    const [Fit, setFit] = useState('')
    const [photos, setPhotos] = useState([])
    const [selectedPhotos, setSelectedPhotos] = useState([])
    const [info, setInfo] = useState({})
    const [characteristics, setCharacteristics] = useState({});

    const allCharacteristics = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']

    const handleSummary = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        setSummary(e.target.value);
    }

    const handleFullBody = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        setBody(e.target.value);
    }

    const handleNickname = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNickname(e.target.value)
    }

    const handleEmail = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handleYesNo = (e, YN) => {
      if(e && YN === 'Yes') {
        setRecommend(true)
      } else if (e && YN === 'No') {
        setRecommend(false)
      }
    }

    const handleCheckbox = (characteristic, number) => {

      setCharacteristics((prevState) => ({
        ...prevState,
        [characteristic]: number
      }))
      console.log('characteristics: ',characteristics);
      };
    
    const handleStars = (event, num) => {
      if(event) {
        if(num === 1) {
          setStars(num)
        } else if (num === 2) {
          setStars(num)

        } else if (num === 3) {
          setStars(num)

        } else if (num === 4) {
          setStars(num)

        } else if (num === 5) {
          setStars(num)

        }

      } 
    }

    const handlePhotoUpload = (e) => {
      const files = e.target.files;
      if (selectedPhotos.length < 5) {
        setPhotos([...photos, files[0].name])
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedPhotos([...selectedPhotos, reader.result]);
        };
        reader.readAsDataURL(files[0]);
      }
    };
    

    const handleSubmit = (e) => {
      const chars = productMeta.characteristics
      const comfortID = productMeta.characteristics.Comfort.id
      const qualityID = productMeta.characteristics.Quality.id
      
      if(chars.Length && chars.Fit) {
        const fitID = productMeta.characteristics.Fit.id
        const lengthID = productMeta.characteristics.Length.id

        var fitLength = {'product_id' : productId, 'rating' : stars, 'summary' : summary,
                    'body' : body, 'recommend': recommend, 'name' : nickname, 
                    'email' : email, 'photos' : photos, 
                    'characteristics' : {[comfortID] : characteristics.Comfort, [fitID]: characteristics.Fit, 
                      [lengthID]: characteristics.Length, [qualityID]: characteristics.Quality}}
       console.log(fitLength)
       postReview(fitLength)
        .then((data) => {
          console.log('Review posted successfully:', data);
          // Handle the response data
        })
        .catch((error) => {
          console.error('Error posting review:', error);
          // Handle the error
        });
        
      } else {

        const sizeID = productMeta.characteristics.Size.id
        const widthID = productMeta.characteristics.Width.id
        var SizeWidth = {'product_id' : productId, 'rating' : stars, 'summary' : summary,
                    'body' : body, 'recommend': recommend, 'name' : nickname, 
                    'email' : email, 'photos' : photos, 
                    'characteristics' : {[sizeID] : characteristics.Size, [widthID]: characteristics.Width, 
                      [comfortID]: characteristics.Comfort, [qualityID]: characteristics.Quality}}
      console.log(SizeWidth)
      postReview(SizeWidth)
        .then((data) => {
          console.log('Review posted successfully:', data);
          // Handle the response data
        })
        .catch((error) => {
          console.error('Error posting review:', error);
          // Handle the error
        });
      }
      
    }
    
  
    return (

        <div>
            <AddWindow>
              <AddDiv>
                <Title>
                    <HeaderDiv>{header}</HeaderDiv>
                    <CloseWindow onClick = {(e) => AddView(e)}>X</CloseWindow>
                </Title>
                <OverallRating>
                    Choose Star Rating!
                    {[1, 2, 3, 4, 5].map((num) => {
                        return <RatingButton selected={num === stars} value = {num} required onClick = {(e) => 
                            handleStars(e, num)}>{num}</RatingButton>
                    })}
                    <RecommendProduct>
                        Do you recommend?
                            <YesNoButton selected={recommend === true} required onClick = {(e) => {handleYesNo(e, 'Yes')}}>Yes</YesNoButton>
                            or 
                            <YesNoButton selected={recommend === false} required onClick = {(e) => {handleYesNo(e, 'No')}}>No</YesNoButton>
                    </RecommendProduct>
                </OverallRating>
                
                <CharacteristicsDIV>
                    <h4>Characteristics: </h4>
                    {allCharacteristics.map((characteristic) => {
                      return <EachCharacteristics>
                              {characteristic}
                              <div>
                                  {[1, 2, 3, 4, 5].map((num) => {
                                      return <CharactertisticButton 
                                                selected={characteristics[characteristic] === num}
                                                required value = {num} 
                                                onClick = {() => handleCheckbox(characteristic, num)}>
                                                  {num}
                                              </CharactertisticButton>
                                  })}
                                  
                              </div>
                              </EachCharacteristics>
                    })}

                </CharacteristicsDIV>
                <ReviewSummary>
                    Enter Summary:
                    <SummaryTextBox type = "text" onChange = {handleSummary} />
                </ReviewSummary>
                <ReviewBody>
                    Enter Review: 
                    <FullTextBox type = "text" required onChange = {handleFullBody} />
                </ReviewBody>
                <UploadPhotos>
                    Insert Photos:
                    <input type="file" multiple onChange={handlePhotoUpload} accept="image/*" />
                </UploadPhotos>
                <ThumbnailContainer>
                  {selectedPhotos.map((photo, index) => (
                    <Thumbnail key={index} src={photo}/>
                  ))}
                </ThumbnailContainer>
                <Nickname>
                    <div>
                      Nickname:<input type = "text" required onChange = {handleNickname} />
                    </div>
      
                    <Email>
                        Email:
                        <input type = "text" required onChange = {handleEmail} />
                    </Email>
                </Nickname>
                
                <SubmitReview>
                    <button onClick = {(e) => {
                      handleSubmit(e)
                    }}>submit</button>
                </SubmitReview>
                
            </AddDiv>
          </AddWindow>
        </div>
    )
}