
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { AddReview } from '../AddReview.jsx';
// import '@testing-library/jest-dom/extend-expect';

// describe(AddReview, () => {
  
//     it('Inputs are displayed on Screen', () => {
//       const { getByText } = render(
//         <AddReview 
//           createHeader={jest.fn()}
//           handleSummary={jest.fn()}
//           handleFullBody={jest.fn()}
//           handleNickname={jest.fn()}
//           handleEmail={jest.fn()}
//           handleYesNo={jest.fn()}
//           handleCheckbox={jest.fn()}
//           handlePhotoUpload={jest.fn()}
//           handleSubmit={jest.fn()}

//         />
//       );
  
//       expect(getByText('Choose Star Rating!')).toBeInTheDocument();
//       expect(getByText('Do you recommend?')).toBeInTheDocument();
//       expect(getByText('Enter Summary:')).toBeInTheDocument();
//       expect(getByText('Enter Review:')).toBeInTheDocument();
//       expect(getByText('Insert Photos:')).toBeInTheDocument();
//       expect(getByText('Nickname:')).toBeInTheDocument();
//       expect(getByText('Email:')).toBeInTheDocument();    

//     });
  
//     // it('calls HandleMoreButton on "MORE REVIEWS', () => {
//     //   const HandleMoreButtonClick = jest.fn();
//     //   const {getByText} = render(
//     //     <AddReview 
//     //       HandleMoreButton={HandleMoreButtonClick}
//     //       AddView={jest.fn()}
//     //     />
//     //   )
//     //   fireEvent.click(getByText('MORE REVIEWS'));
//     //   expect(HandleMoreButtonClick).toHaveBeenCalledTimes(1);
//     // })
  
//     // it('calls addReviewsButton on "ADD BUTTON +', () => {
//     //   const addReviewsButtonClick = jest.fn();
//     //   const {getByText} = render( 
//     //     <AddReview 
//     //       HandleMoreButton={jest.fn()}
//     //       AddView={addReviewsButtonClick}
//     //     />
//     //   )
//     // })
//   });