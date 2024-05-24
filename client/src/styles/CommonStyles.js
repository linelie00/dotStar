import styled from 'styled-components';

const CommonBtn = styled.div`
  width: ${(props) => props.width};
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 8px;
  border-radius: 4px;

  color: var(--white-fontColor);
  font-size: 16px;
  font-weight: bold;
  background: var(--point-bgColor);
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

export { CommonBtn, CommonTag, CommonUser };
