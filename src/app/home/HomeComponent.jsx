import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bulma/css/custom-bulma.css";
import "../styles/custom-props.css";
import { device } from "../styles/device";

const HeroSection = styled.section.attrs({
  className: "hero is-bold is-fullheight"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  font-family: Roboto, sans-serif, Arial;
  background: var(--main-bg);
  color: var(--main-font-color);
`;

const Container = styled.div.attrs({
  className: "container"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10rem;
  ${device.mobileL`
    align-items: flex-start;

    `};
`;
const Title = styled.div`
  font-size: var(--home-title-size);
  letter-spacing: var(--title-letter-spacing);
  text-transform: uppercase;
  ${device.mobileL`
    --home-title-size: 3.5rem;    
    `};
`;
const SubTitle = styled.div.attrs({
  className: "subtitle"
})`
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.2rem;

  color: var(--main-font-color);
  ${device.mobileL`
  text-align: left;
    `};
`;

const CtaContainer = styled.div`
  width: 16rem;
`;
const CtaButton = styled.button.attrs({
  className: "button is-info"
})`
  text-transform: capitalize;
  height: 5rem;
  width: 100%;
  font-size: 1.5rem;
`;

const CtaText = styled.p`
  margin-top: 1.2rem;
  font-size: 0.8rem;
  line-height: 1.3rem;
`;
const HomeComponent = props => {
  return (
    <HeroSection>
      <div className="hero-body">
        <Container>
          <Title>Incipit</Title>
          <SubTitle>
            The only flashcard program that you will ever need.
          </SubTitle>
          <CtaContainer>
            <Link to="/flashcards-page">
              <CtaButton>Start Your Journey</CtaButton>
            </Link>

            <CtaText>
              Still not convinced... Try it out, no registration is required.
            </CtaText>
          </CtaContainer>
        </Container>
      </div>
    </HeroSection>
  );
};

export default HomeComponent;
