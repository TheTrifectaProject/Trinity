import { render, screen } from "@testing-library/react";
import React from 'react';
import Photos from "./Photos";
import ProductandStyle from "./ProductandStyle";

test('Should Render Photos main container', () => {
  render(<Photos />);
  const PhotosDIV = screen.getByTestId('Photo-Container');
  expect(PhotosDIV).toBeInTheDocument();
});

test('Should Render Photo Gallery container', () => {
  render(<Photos />);
  const PhotoGallery = screen.getByTestId("Photo-Gallery");
  expect(PhotoGallery).toBeInTheDocument();
});


test('Should Render Main Display Container', () => {
  render(<Photos />);
  const MainDisplay = screen.getByTestId("MainDisplay-Container");
  expect(MainDisplay).toBeInTheDocument();
});

test('Should Render main Product and Style Container', () => {
  render(<ProductandStyle />);
  const NameStyleDIV = screen.getByTestId("NameStyleDIV");
  expect(NameStyleDIV).toBeInTheDocument();
});

test('Should Render Top Div Container', () => {
  render(<Photos />);
  const TopDIV = screen.getByTestId("TopDIV");
  expect(TopDIV).toBeInTheDocument();
});

test('Should Render Mid Div Container', () => {
  render(<Photos />);
  const MidDIV = screen.getByTestId("MidDIV");
  expect(MidDIV).toBeInTheDocument();
});

test('Should Render Bottom DIV Container', () => {
  render(<Photos />);
  const BottomDIV = screen.getByTestId("BottomDIV");
  expect(BottomDIV).toBeInTheDocument();
});


