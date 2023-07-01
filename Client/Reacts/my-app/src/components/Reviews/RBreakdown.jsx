
import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"

export const StarIcon = styled.span`
  margin: 1px;
  &:before {
    content: '★'; 
  }
`
export const RBreakdownDiv = styled.div`
  display:flex;
  flex-direction: column;
  width: 35%;
  height: 500px;
  /* border: 3px solid black; */
  margin: 20px 0 0 0;
  `
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
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
export const PercentRec = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 220px;
  margin: 15px 15px 0px 15px;
  font-size: 13px;
`
export const StarDivide = styled.div`
  display:flex;
  flex-direction: column;
  height: 220px;
  width: 220px;
  margin: 0px 15px 15px 15px;
`
export const NumberStar = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  height: 30px;
  width: 200px;
  margin: 0px 10px 0px 10px;
  font-size: 13px;
`
export const Expectation = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  width: 220px;
  margin: 0px 15px 15px 15px;
`

export const SizeComfort = styled.div`
  display:flex;
  height: 10px;
  width: 95%;
  margin: 10px 10px 5px 10px;
  font-size: 12px;
`

export const DescriptionDiv = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10px;
  width: 95%;
  margin: 0px 10px 15px 10px;
`
export const Description = styled.div`
  display: flex;
  justify-content: center;
  height: 8px;
  width: 30%;
  font-size: 9px;
  
`

function generateStarIcons(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }

function findCountStar(reviewProduct){

    var totalReviews = 0
    var fiveStars = 0;
    var fourStars = 0;
    var threeStars = 0;
    var twoStars = 0;
    var oneStars = 0;

    reviewProduct.forEach((review) => {
        totalReviews++;
        if (review.rating === 5) {
            fiveStars++;
        } else if (review.rating === 4) {
            fourStars++
        } else if (review.rating === 3) {
            threeStars++
        } else if (review.rating === 2) {
            twoStars++
        } else if (review.rating === 1) {
            oneStars++
        }
    })
    const percentFive = (100 * fiveStars) / totalReviews;
    const percentFour = (100 * fourStars) / totalReviews;
    const percentThree = (100 * threeStars) / totalReviews;
    const percentTwo = (100 * twoStars) / totalReviews;
    const percentOne = (100 * oneStars) / totalReviews;
    const allPercents = [percentFive, percentFour, percentThree, percentTwo, percentOne]

    return allPercents;
}

export const HorizontalBarContainer = styled.div`
  width: 75%;
  height: 7px;
  background-color: #D3D3D3;
  position: relative;
  border-radius: 1px;
  border: 1px #808080;
`

export const Bar = styled.div`
  height: 100%;
  background-color: #303030;
  width: ${(props) => props.percentage}%;
  position: absolute;
  top: 0;
  left: 0;
`

export const SizeComfortBarContainer = styled.div`
  width: 95%;
  height: 8px;
  background-color: #D3D3D3;
  position: relative;
  border-radius: 1px;
  margin: 0px 0px 7px 0px;
`
const UpsideDownTriangleIcon = styled.div`
  position: absolute;
  left: ${(props) => props.percentage}%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid black;
`;

export const RBreakdown = ({reviewProduct, productMeta}) => {
    console.log("review: ", productMeta)
    const [Rating, setRating] = useState();
    const [recommend, setRec] = useState();
    const [fiveStar, setFiveStar] = useState();
    const [fourStar, setFourStar] = useState();
    const [threeStar, setThreeStar] = useState();
    const [twoStar, setTwoStar] = useState();
    const [oneStar, setOneStar] = useState();
    const [size, setSize] = useState();
    const [comfort, setComfort] = useState();


    useEffect(() => {
        AverageSizeFit(productMeta)
        AverageRating(reviewProduct)
        Recommend(reviewProduct)
        setFiveStar(findCountStar(reviewProduct)[0])
        setFourStar(findCountStar(reviewProduct)[1])
        setThreeStar(findCountStar(reviewProduct)[2])
        setTwoStar(findCountStar(reviewProduct)[3])
        setOneStar(findCountStar(reviewProduct)[4])

    }, [reviewProduct])

    const AverageRating = (reviewProduct) => { 
        console.log("reviewProduct: ", reviewProduct);
        const allRatings = []
        reviewProduct.forEach((review) => {
            allRatings.push(review.rating)
        })
        const sum = allRatings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / allRatings.length;
        setRating((average).toFixed(1));     
    } 

    const Recommend = (reviewProduct) => {
        var totalReviews = 0
        var totalRec = 0;
        var percentRec = 0;
        reviewProduct.forEach((review) => {
            totalReviews++;
            if (review.recommend) {
                totalRec++;
            }
        })
        percentRec = (100 * totalRec) / totalReviews;
        setRec(percentRec + '% of reviewers recommend');
    }

    const AverageSizeFit = (productMeta) => {
        if(productMeta.characteristics.Fit) {
            var fit = productMeta.characteristics.Fit.value;
            var comfort = productMeta.characteristics.Comfort.value;
            fit = Math.round(fit * 10) / 10
            comfort = Math.round(comfort * 10) / 10

            setSize(fit);
            setComfort(comfort);
       
        } else if (productMeta.characteristics.Size) {
            var Size = productMeta.characteristics.Size.value;
            comfort = productMeta.characteristics.Comfort.value;
            fit = Math.round(fit * 10) / 10
            comfort = Math.round(comfort * 10) / 10

            setSize(Size);
            setComfort(comfort);
        }
       
    }

    return (
        <>
        {console.log(size, comfort)}
            <RBreakdownDiv>
                <RatingContainer>
                <RatingText>{Rating}</RatingText>
                <AverageStar>
                    {generateStarIcons(Rating)}
                </AverageStar>
                </RatingContainer>

                <PercentRec>
                    {recommend}
                </PercentRec>

                <StarDivide>
                    <NumberStar>
                        5 stars
                        <HorizontalBarContainer>
                            <Bar percentage={fiveStar} />
                        </HorizontalBarContainer>
                    </NumberStar>
                    <NumberStar>
                        4 stars 
                        <HorizontalBarContainer>
                            <Bar percentage={fourStar} />
                        </HorizontalBarContainer>
                    </NumberStar>
                    <NumberStar>
                        3 stars
                        <HorizontalBarContainer>
                            <Bar percentage={threeStar} />
                        </HorizontalBarContainer>
                    </NumberStar>    
                    <NumberStar>
                        2 stars
                        <HorizontalBarContainer>
                            <Bar percentage={twoStar} />
                        </HorizontalBarContainer>
                    </NumberStar>
                    <NumberStar>
                        1 star
                        <HorizontalBarContainer>
                            <Bar percentage={oneStar} />
                        </HorizontalBarContainer>
                    </NumberStar>

                </StarDivide>

                <Expectation>
                    <SizeComfort>Size</SizeComfort>
                    <SizeComfortBarContainer>
                        <UpsideDownTriangleIcon percentage = {(size/5) * 100}/>
                    </SizeComfortBarContainer>
                        <DescriptionDiv>
                            <Description>Too Small</Description>
                            <Description>Perfect</Description>
                            <Description>Too Big</Description>
                        </DescriptionDiv>
                        
                    <SizeComfort>Comfort</SizeComfort>
                    <SizeComfortBarContainer>
                        <UpsideDownTriangleIcon percentage = {(comfort/5) * 100}/>
                    </SizeComfortBarContainer>
                        <DescriptionDiv>
                            <Description>Poor</Description>
                            <Description>Perfect</Description>
                        </DescriptionDiv>
                </Expectation>

            </RBreakdownDiv>
        </>
    )
    
}