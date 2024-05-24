import React from 'react';
import HeaderComponent from '../component/layout/HeaderComponent';
import {
  BodyContainer,
  ContentContainer,
  TopContainer,
  BottomContainer,
  MainPhrasesContainer,
  MainPhrasePointTxt,
  LoginContainer,
  LoginContentForm,
  LoginInput,
  LoginInfoTxt,
  PromoImgBox,
} from '../styles/HomeStyles';
const IntroPage = () => {
  return (
    <BodyContainer backgrond="var(--white-bgColor)">
      <HeaderComponent />
      <ContentContainer>
        <TopContainer>
          <div>
            <MainPhrasesContainer>
              Let's Play <MainPhrasePointTxt color="var(--point-fontColor)">TRPG!</MainPhrasePointTxt>
              <br />
              In Your <MainPhrasePointTxt color="var(--point2-fontColor)">House</MainPhrasePointTxt>
            </MainPhrasesContainer>
            <LoginContainer>
              <LoginContentForm>
                <LoginInfoTxt>Email</LoginInfoTxt>
                <LoginInput />
              </LoginContentForm>
              <LoginContentForm>
                <LoginInfoTxt>Password</LoginInfoTxt>
                <LoginInput />
              </LoginContentForm>
            </LoginContainer>
          </div>
        </TopContainer>
        <BottomContainer>
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
          <PromoImgBox />
        </BottomContainer>
      </ContentContainer>
    </BodyContainer>
  );
};
export default IntroPage;
