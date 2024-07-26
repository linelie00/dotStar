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

const NaviContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const NaviContentBox = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  justify-content: space-around;
`;

const NaviContentPageBox = styled.div`
  width: fit-content;
  display: flex;

  margin: 0 14px;
`;

const NaviContentPageBtn = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  border-radius: 8px;

  background: ${({ active }) => (active ? 'var(--dotStar-mainColor)' : 'var(--white-bgColor)')};
  color: ${({ active }) => (active ? 'var(--white-fontColor)' : 'var(--black-fontColor)')};
  cursor: pointer;
`;

export {
  HeaderContainer,
  HeaderContentBox,
  TitleTxt,
  NaviContainer,
  NaviContentBox,
  NaviContentPageBox,
  NaviContentPageBtn,
};
