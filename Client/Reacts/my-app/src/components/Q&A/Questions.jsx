import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchQuestions from './fetchQuestions';
import axios from 'axios';

const QuestionsDIV = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
`;

const AnswerContent = styled.div`
  margin-top: 5px;
  align-items: left;
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
  font-weight: bold;
  margin-bottom: 10px;
`;

const QADiv = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-bottom: 20px; /* Updated margin */
  padding: 10px;
`;


const QuestionHelpfulContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%; // ensure it takes the full width
`;

const QuestionText = styled.p`
  margin: 0;
`;

const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const AnswerHeader = styled.h3`
  margin-right: 10px;
`;

const LoadMoreButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
`;

const AddQuestionButton = styled.button`
  margin-top: 20px; /* Updated margin */
  margin-left: 12px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
`;

const AddQuestionContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-bottom: 20px; /* Added margin */
`;

const AddQuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;


const AddQuestionInput = styled.input`
  /* Add your styles here */
`;


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
};

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const [reportedQuestions, setReportedQuestions] = useState(new Set());
  const [helpfulnessCount, setHelpfulnessCount] = useState(0);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsData = await fetchQuestions("43043");
        console.log("Fetched Questions:", questionsData);

        const fetchedQuestions = await Promise.all(questionsData.results.map(async question => {
          const answersData = question.answers || {}; // Use question.answers directly
          console.log('Answers for question:', question.question_id, answersData);
          return { ...question, answers: answersData };
        }));

        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleLoadMore = () => {
    setVisibleQuestions((prevVisibleQuestions) => prevVisibleQuestions + 2);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleAnswerQuestion = (questionId) => {
    setSelectedAnswerIds((prevIds) => {
      if (prevIds.includes(questionId)) {
        return prevIds.filter((id) => id !== questionId);
      } else {
        return [...prevIds, questionId];
      }
    });
  };


  const handleAddAnswer = (event, questionId) => {
    event.preventDefault();

    axios
      .post(`/qa/questions/${questionId}/answers`, {
        body: answerText,
        name: name,
        email: email,
        photos: [],
      })
      .then((response) => {
        const newAnswer = {
          answer_id: response.data.id,  // use the answer_id from the server
          question_id: questionId,
          body: answerText,
          date: new Date(), // You can format this date as you need
          answerer_name: name,
          helpfulness: 0,
        };

        setAnswers((prevAnswers) => [newAnswer, ...prevAnswers]);
        setAnswerText('');
        setSelectedQuestionId(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleReportQuestion = (questionId) => {
    setReportedQuestions((prev) => {
      const newReported = new Set(prev);
      newReported.add(questionId);
      return newReported;
    });
  };

  const handleAddQuestion = (event) => {
    event.preventDefault();
    const newQuestionObj = {
      question_id: Date.now().toString(),
      question_body: newQuestion,
      asker_name: name,
      asker_email: email,
    };
    setQuestions((prevQuestions) => [newQuestionObj, ...prevQuestions]);
    setNewQuestion('');
    setName('');
    setEmail('');
    setShowAddQuestion(false);
  };

  const filteredQuestions = questions.filter((question) =>
    question.question_body.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <QuestionsDIV>
      <Text>Questions & Answers</Text>
      <SearchBar type="text" placeholder="Have A Question? Search Here..." onChange={handleInputChange} />

      {filteredQuestions.length === 0 && <p>No matching questions found.</p>}

      {filteredQuestions.slice(0, visibleQuestions).map((question) => {
        if (reportedQuestions.has(question.question_id)) {
          return null;
        }

        return (
          <QADiv key={question.question_id}>
            <QuestionHelpfulContainer>
              <QuestionText>Q: {question.question_body}</QuestionText>
              <div>
                Helpful? Yes ({helpfulnessCount}) |
                <span onClick={() => handleAnswerQuestion(question.question_id)} style={{ cursor: 'pointer', color: 'blue' }}> Answer</span>
              </div>
            </QuestionHelpfulContainer>

            <AnswerContainer>
  <AnswerHeader>A:</AnswerHeader>
  {question.answers && Object.values(question.answers).map((answer, index) => {
    if (!answer.body) {
      console.log('No answer body for:', answer);
      return null;
    }

    if (index === 0) {
      return (
        <AnswerContent key={answer.id}>
          <p>{answer.body}</p>
        </AnswerContent>
      );
    }

    return null;
  })}
</AnswerContainer>


            <div>
              By: {question.asker_name}, {formatDate(question.question_date)} | Helpful? Yes |
              <span onClick={() => handleReportQuestion(question.question_id)} style={{ cursor: 'pointer', color: 'black' }}> Report</span>
            </div>
          </QADiv>
        );
      })}

      {questions.length > visibleQuestions && (
        <LoadMoreButton onClick={handleLoadMore}>More Answered Questions</LoadMoreButton>
      )}

      <AddQuestionButton onClick={() => setShowAddQuestion(true)}>Add Question +</AddQuestionButton>

      <AddQuestionContainer show={showAddQuestion}>
        <AddQuestionForm onSubmit={handleAddQuestion}>
          <AddQuestionInput
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <AddQuestionInput
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <AddQuestionInput
            type="text"
            placeholder="Enter a new question"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />
          <button type="submit">Submit</button>
        </AddQuestionForm>
      </AddQuestionContainer>
    </QuestionsDIV>
  );

  };

export default Questions;
