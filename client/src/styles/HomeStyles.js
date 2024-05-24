import styled from 'styled-components';
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 62.5%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  width: 62.5%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;

  background: var(--white-bgColor);
`;

const TopContainer = styled.div`
  width: 100%;
  height: calc(100% - 41.423%);

  position: relative;
  padding: 20% 0 0 5.3125%;
  border-left: 5px solid var(--point-borderColor);
`;

const BottomContainer = styled.div`
  width: 100%;
  height: calc(41.432% - 32px);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 32px;
`;

const MainPhrasesContainer = styled.div`
  width: calc(100% - 5.3125%);

  font-family: NicoMoji;
  font-size: 3.5em;
  text-align: left;
`;

const LoginContainer = styled.div`
  width: calc(100% - 5.3125%);

  display: flex;
  flex-direction: column;
  align-items: start;

  margin-top: 32px;
`;

const MainHeaderContainer = styled.div`
  width: 100%;
  height: 36px;

  margin: 34px 24px 24px;
  display: flex;
  justify-contents: space-between;
  align-items: center;
`;

const MainContentContainer = styled.div`
  width: calc(100% - 48px);
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0 24px 44px;
`;

const MainGameBox = styled.div`
  width: calc(33% - 92px);
  height: 324px;

  display: flex;
  flex-direction: column;

  padding: 20px 30px;
  margin-bottom: 32px;
  border: 1px solid var(--gray-borderColor);
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const MainGameContentBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--gray-borderColor);
`;

const MainHeaderBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

const PromoImgBox = styled.div`
  width: calc(25% - 8px);
  height: 46.286%;

  border-radius: 8px;
  background: #d9d9d9;
`;

const MainGameImgBox = styled.div`
  width: 100%;
  height: 200px;

  margin-bottom: 16px;

  background: #d9d9d9;
`;
const MainGameUserBox = styled.div`
  width: 100%;
  min-height: 24px;

  display: flex;

  margin-top: 8px;
`;

const MainGameTagBox = styled.div`
  width: 100%;
  min-height: 18px;

  display: flex;

  margin-top: 8px;
`;

const LoginContentForm = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

const LoginInput = styled.div`
  width: 282px;
  height: 36px;

  border: 2px solid var(--point-borderColor);
  border-radius: 4px;
  outline: none;
`;

const MainPhrasePointTxt = styled.div`
  display: inline-block;

  font-size: 1em;
  color: ${(props) => props.color};
`;

const LoginInfoTxt = styled.div`
  font-family: NicoMoji;
  font-size: 16px;
  text-align: start;

  margin-bottom: 4px;
`;

const MainTitleTxt = styled.div`
  font-size: 20px;
  font-weight: bold;

  margin-right: 16px;
`;

const MainGameTitleTxt = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const MainGameDateTxt = styled.div`
  font-size: 12px;

  margin-bottom: 4px;

  color: var(--gray-fontColor);
`;

export {
  BodyContainer,
  ContentContainer,
  MainContainer,
  MainContentContainer,
  TopContainer,
  BottomContainer,
  MainPhrasesContainer,
  MainHeaderContainer,
  MainHeaderBox,
  PromoImgBox,
  MainGameBox,
  MainGameImgBox,
  MainGameUserBox,
  MainGameContentBox,
  MainGameTagBox,
  LoginContentForm,
  LoginInput,
  LoginContainer,
  MainTitleTxt,
  MainPhrasePointTxt,
  LoginInfoTxt,
  MainGameTitleTxt,
  MainGameDateTxt,
};
