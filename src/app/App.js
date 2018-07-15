import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './home/HomeContainer';
import FlashcardsPage from './flashcards-page/FlashcardsPageContainer';
const AppContainer = styled.div`
`;
class App extends Component {
  render() {
    return (
      <AppContainer>

        <Route exact path = '/' component = {Home} />
        <Route exact path = '/flashcards-page' component = {FlashcardsPage} />

      </AppContainer>
    );
  }
}

export default App;
