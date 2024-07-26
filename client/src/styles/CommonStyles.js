import styled from 'styled-components';

const CommonBtn = styled.div`
  width: ${(props) => props.width};
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 8px;
  box-shadow: ${(props) => props.boxShadow};
  border-radius: 4px;

  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight};
  background: ${(props) => props.background};
  cursor: pointer;
`;

const CommonTag = styled.div`
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 8px;
  border-radius: 16px;

  font-size: 12px;
  font-weight: bold;
  background: ${(props) => props.background};
  color: var(--white-fontColor);
`;

const CommonUser = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  border-radius: 50%;
  background: var(--gray-bgColor);
`;

const CommonTxt = styled.div`
  font-family: 'Pretendard';
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export { CommonBtn, CommonTag, CommonUser, CommonTxt };
