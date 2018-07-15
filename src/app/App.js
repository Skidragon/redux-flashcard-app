import React, { Component } from 'react';
import styled from 'styled-components';
// import { Route } from 'react-router-dom';
import HomeContainer from './home/HomeContainer';
const AppContainer = styled.div`
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
        <HomeContainer />

      </AppContainer>
    );
  }
}

export default App;
