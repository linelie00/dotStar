import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../component/layout/HeaderComponent';
import NaviComponent from '../component/layout/NavigateComponent';
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
  MainGameSearch,
} from '../styles/HomeStyles';
import { CommonBtn, CommonTag, CommonUser } from '../styles/CommonStyles';
import plus from '../assets/icons/plus.svg';
import search from '../assets/icons/search.svg';

const MainPage = () => {
  const navigate = useNavigate();

  const handlePageInfo = () => {
    navigate('/sessionInfo');
  };
  return (
    <BodyContainer background="var(--gray-bgColor)">
      <HeaderComponent />
      <MainContainer>
        <MainHeaderContainer>
          <MainHeaderBox>
            <MainTitleTxt>My Games</MainTitleTxt>
            <CommonBtn width="120px" color="var(--white-fontColor)" background="var(--point-bgColor)" fontWeight="bold">
              <img src={plus} alt="make new Game" />
              new Game
            </CommonBtn>
          </MainHeaderBox>
          <MainHeaderBox>
            <img src={search} alt="search session Room" style={{ margin: '0px 8px 0px 0px' }} />
            <MainGameSearch spellCheck="false" />
          </MainHeaderBox>
        </MainHeaderContainer>
        <MainContentContainer>
          <MainGameBox>
            <MainGameImgBox />
            <MainGameContentBox onClick={() => handlePageInfo()}>
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
        <NaviComponent />
      </MainContainer>
    </BodyContainer>
  );
};

export default MainPage;
