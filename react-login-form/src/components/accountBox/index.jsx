import { React, useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './loginForm';
import { SignupForm } from './signupForm';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext'

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

  @media (max-width: 567px) {
    // min-height:110vh;
    width: 420px;
    background-color:darkslategrey;
  border-radius: 0px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 460%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  background: linear-gradient(
    58deg, rgba(31, 135, 75, 0.8) 25%, rgba(0,255,0,0.3) 100%
  );

  @media (max-width: 567px) {
    border-radius:50%;
    transform: rotate(60deg);
    height:100vh;
    left:10px;
    top:-250px;

    .collapsed{
      width: 108%,
      height: 610px,
      borderRadius: 50%,
      transform: rotate(-122deg)
    }
  }

  
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  @media (max-width: 567px) {
    font-size: 38px;
    font-weight: 650;
  } 

`;

const SmallText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-top: 7px;
  z-index: 10;
  @media (max-width: 567px) {
    font-size: 13.5px;
    font-weight: 400;
  } 
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  @media (max-width: 567px) {
    padding: 170px 40px;
    backgroung-color:black;
  }
  
`;

const backdropVariants = {
  expanded: {
    width: "433%",
    height: "1400px",
    borderRadius: "50%",
    left:"-470px",
    transform: "rotate(60deg)"
  },
  collapsed: {
    width: (window.innerWidth>567)? "160%":"98%",
    height: (window.innerWidth>567)?"550px":"620px",
    borderRadius: "50%",
    transform:(window.innerWidth>567)? "rotate(60deg)":"rotate(-102deg)"
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
}

export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState('signin');

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  }

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  }

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  }

  const contextValue = {switchToSignup, switchToSignin};
  
  return (
  <AccountContext.Provider value={contextValue}>
  <BoxContainer className='boxContainer'>
    <TopContainer>
      <BackDrop 
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={backdropVariants}
        transition={expandingTransition}
      >
        
      </BackDrop>
      {active === "signin" && <HeaderContainer>
        <HeaderText className='headingText'>Welcome</HeaderText>
        <HeaderText>Back</HeaderText>
        <SmallText>Please sign-in to continue!</SmallText>
      </HeaderContainer>}
      {active === "signup" && <HeaderContainer>
        <HeaderText className='headingText'>Create</HeaderText>
        <HeaderText>Account</HeaderText>
        <SmallText>Please sign-up to continue!</SmallText>
      </HeaderContainer>}
    </TopContainer>
    <InnerContainer>
      {active === "signin" && <LoginForm />}
      {active === "signup" && <SignupForm />}
    </InnerContainer>
  </BoxContainer>
  </AccountContext.Provider>  
  );
}