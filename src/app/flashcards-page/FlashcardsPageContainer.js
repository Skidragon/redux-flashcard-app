import React from 'react';
import { connect } from 'react-redux';
import FlashcardsPageComponent from './FlashcardsPageComponent';

const FlashcardsPageContainer = connect(null)(FlashcardsPageComponent);

export default FlashcardsPageContainer;