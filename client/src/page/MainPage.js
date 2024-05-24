import React from 'react';
import HeaderComponent from '../component/layout/HeaderComponent';
import {
  BodyContainer,
  MainContainer,
  MainContentContainer,
  MainGameBox,
  MainGameContentBox,
  MainGameDateTxt,
  MainGameImgBox,
  MainGameTagBox,
  MainGameTitleTxt,
  MainGameUserBox,
  MainHeaderBox,
  MainHeaderContainer,
  MainTitleTxt,
} from '../styles/HomeStyles';
import { CommonBtn, CommonTag, CommonUser } from '../styles/CommonStyles';
import plus from '../assets/icons/plus.svg';

const MainPage = () => {
  return (
    <BodyContainer background="var(--gray-bgColor)">
      <HeaderComponent />
      <MainContainer>
        <MainHeaderContainer>
          <MainHeaderBox>
            <MainTitleTxt>My Games</MainTitleTxt>
            <CommonBtn width="120px">
              <img src={plus} alt="make new Game" />
              new Game
            </CommonBtn>
          </MainHeaderBox>
        </MainHeaderContainer>
        <MainContentContainer>
          <MainGameBox>
            <MainGameImgBox />
            <MainGameContentBox>
              <MainGameTitleTxt>시맨틱 오프 트랙</MainGameTitleTxt>
              <MainGameDateTxt>Last Played On 24.04.23</MainGameDateTxt>
            </MainGameContentBox>
            <MainGameUserBox>
              <CommonUser width="24px" height="24px"></CommonUser>
            </MainGameUserBox>
            <MainGameTagBox>
              <CommonTag background="var(--dotStar-mainColor)">COC</CommonTag>
            </MainGameTagBox>
          </MainGameBox>
          <MainGameBox>
            <MainGameImgBox />
            <MainGameContentBox>
              <MainGameTitleTxt>시맨틱 오프 트랙</MainGameTitleTxt>
              <MainGameDateTxt>Last Played On 24.04.23</MainGameDateTxt>
            </MainGameContentBox>
            <MainGameUserBox>
              <CommonUser width="24px" height="24px"></CommonUser>
            </MainGameUserBox>
            <MainGameTagBox>
              <CommonTag background="var(--dotStar-mainColor)">COC</CommonTag>
            </MainGameTagBox>
          </MainGameBox>
          <MainGameBox>
            <MainGameImgBox />
            <MainGameContentBox>
              <MainGameTitleTxt>시맨틱 오프 트랙</MainGameTitleTxt>
              <MainGameDateTxt>Last Played On 24.04.23</MainGameDateTxt>
            </MainGameContentBox>
            <MainGameUserBox>
              <CommonUser width="24px" height="24px"></CommonUser>
            </MainGameUserBox>
            <MainGameTagBox>
              <CommonTag background="var(--dotStar-mainColor)">COC</CommonTag>
            </MainGameTagBox>
          </MainGameBox>
          <MainGameBox>
            <MainGameImgBox />
            <MainGameContentBox>
              <MainGameTitleTxt>시맨틱 오프 트랙</MainGameTitleTxt>
              <MainGameDateTxt>Last Played On 24.04.23</MainGameDateTxt>
            </MainGameContentBox>
            <MainGameUserBox>
              <CommonUser width="24px" height="24px"></CommonUser>
            </MainGameUserBox>
            <MainGameTagBox>
              <CommonTag background="var(--dotStar-mainColor)">COC</CommonTag>
            </MainGameTagBox>
          </MainGameBox>
        </MainContentContainer>
      </MainContainer>
    </BodyContainer>
  );
};

export default MainPage;
