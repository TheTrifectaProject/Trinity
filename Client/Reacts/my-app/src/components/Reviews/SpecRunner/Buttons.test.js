
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Buttons } from '../Buttons.jsx';
import '@testing-library/jest-dom/extend-expect';

describe(Buttons, () => {
  
  it('buttons are displayed on screen', () => {
    const { getByText } = render(
      <Buttons 
        HandleMoreButton={jest.fn()}
        AddView={jest.fn()}
      />
    );

    expect(getByText('MORE REVIEWS')).toBeInTheDocument();
    expect(getByText('ADD REVIEW +')).toBeInTheDocument();
  });

  it('calls HandleMoreButton on "MORE REVIEWS', () => {
    const HandleMoreButtonClick = jest.fn();
    const {getByText} = render(
      <Buttons 
        HandleMoreButton={HandleMoreButtonClick}
        AddView={jest.fn()}
      />
    )
    fireEvent.click(getByText('MORE REVIEWS'));
    expect(HandleMoreButtonClick).toHaveBeenCalledTimes(1);
  })

  it('calls addReviewsButton on "ADD BUTTON +', () => {
    const addReviewsButtonClick = jest.fn();
    const {getByText} = render( 
      <Buttons 
        HandleMoreButton={jest.fn()}
        AddView={addReviewsButtonClick}
      />
    )
  })
});