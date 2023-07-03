import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchQuestions from './fetchQuestions';


const QuestionsDIV = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  &::placeholder {
    font-weight: bold;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: solid;
  margin-bottom: 10px;
`;

const QADiv = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 10px;
`;

const LoadMoreText = styled.span`
display:inline-block;
  margin-bottom: 10px;
  margin-left: 1px;
  font-size: 10px;
  font-weight: bold;
  text-align: left;

`;

const ButtonsDiv = styled.div`
  display: center;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  flex: 1;
  margin-right: 10px;
  align-self: flex-start;
  height: 48px;
  width: 196px;
  margin-left: 5px;
`;
const QuestionContainer = styled.div`
  margin-bottom: 10px;
`;

const Question = styled.h3`
  font-weight: bold;
`;

const Answer = styled.p`
  margin-left: 20px;
`;

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchProductQuestions = async () => {
      try {
        const data = await fetchQuestions("5");
        console.log("Fetched Questions:", data);
        setQuestions(data.results);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };


    fetchProductQuestions();
  }, []);


  return (
    <QuestionsDIV>
      <Text>Questions & Answers</Text>
      <SearchBar type="text" placeholder="Have A Question Search Here..." />

      {questions.map((question) => (
        <QADiv key={question.question_id}>
          <QuestionContainer>
            <Question>{question.question_body}</Question>
            <h1> Render here </h1>
            {question.answers.map((answer) => (
              <Answer key={answer.id}>{answer.body}</Answer>
            ))}
          </QuestionContainer>
        </QADiv>
      ))}

      <LoadMoreText>Load More Answers</LoadMoreText>
      <ButtonsDiv>
        <Button>More Answered Questions</Button>
        <Button>Add a Question +</Button>
      </ButtonsDiv>
    </QuestionsDIV>
  );
};

export default Questions;