import React from 'react';
import HeaderComponent from '../component/layout/HeaderComponent';
import {
  BodyContainer,
  MainContainer,
  MainContentContainer,
  MainHeaderBox,
  MainHeaderContainer,
  MainTitleTxt,
  MainGameSearch,
  InfoLeftBox,
  InfoRightBox,
  InfoCardImg,
  InfoMasterContainer,
  InfoMasterBox,
  InfoMasterTxtBox,
} from '../styles/HomeStyles';
import { CommonBtn, CommonTxt, CommonUser } from '../styles/CommonStyles';
import play from '../assets/icons/play.svg';
import search from '../assets/icons/search.svg';
import setting from '../assets/icons/setting.svg';

const SessionInfoPage = () => {
  return (
    <BodyContainer background="var(--gray-bgColor)">
      <HeaderComponent />
      <MainContainer>
        <MainHeaderContainer>
          <MainHeaderBox>
            <MainTitleTxt>시맨틱 오프 트랙</MainTitleTxt>
            <CommonBtn width="120px" color="var(--white-fontColor)" background="var(--point-bgColor)" fontWeight="bold">
              <img src={play} alt="make new Game" style={{ margin: '0 8px 0 0' }} />
              Start Game
            </CommonBtn>
          </MainHeaderBox>
          <MainHeaderBox>
            <img src={search} alt="search session Room" style={{ margin: '0px 8px 0px 0px' }} />
            <MainGameSearch spellCheck="false" />
          </MainHeaderBox>
        </MainHeaderContainer>
        <MainContentContainer>
          <InfoLeftBox>
            <InfoCardImg></InfoCardImg>
            <InfoMasterContainer>
              <InfoMasterBox>
                <CommonUser width="48px" height="48px" />
                <InfoMasterTxtBox>
                  <CommonTxt fontSize="16px" fontWeight="bold" color="var(--black-fontColor)">
                    Game master
                  </CommonTxt>
                  <CommonTxt fontSize="16px" fontWeight="regular" color="var(--black-fontColor)">
                    플레이 시간 : 1
                  </CommonTxt>
                </InfoMasterTxtBox>
              </InfoMasterBox>
              <img src={setting} alt="game Setting" />
            </InfoMasterContainer>
          </InfoLeftBox>
          <InfoRightBox></InfoRightBox>
        </MainContentContainer>
      </MainContainer>
    </BodyContainer>
  );
};

export default SessionInfoPage;
