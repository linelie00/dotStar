import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: calc(100% - 56px);
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 28px;

  background: var(--dotStar-mainColor);
`;

const HeaderContentBox = styled.div`
  display: flex;
  align-items: center;
`;

const TitleTxt = styled.h3`
  font-family: NicoMoji;
  font-size: 20px;
  color: var(--white-fontColor);

  margin: 0 0 0 8px;
`;

export { HeaderContainer, HeaderContentBox, TitleTxt };
