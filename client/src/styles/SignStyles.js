import styled from 'styled-components';

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  background: var(--dotStar-mainColor);
`;

const SignContainer = styled.div`
  width: 23.4375%;
  min-width: 334px;
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10.364%;
  padding: 52px;
  border-radius: 8px;

  background: var(--white-bgColor);
`;

const SignInputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SignBtnContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const SignInput = styled.input`
  width: calc(100% - 24px);
  height: 22px;

  margin: 12px 0px;
  padding: 12px;
  border: 1px solid var(--gray-borderColor);
  border-radius: 8px;
  outline: none;

  font-size: 16px;
`;

const SignInBtn = styled.div`
  width: calc(100% - 24px);
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  border-radius: 8px;
  background: var(--dotStar-mainColor);

  color: var(--white-fontColor);
  cursor: pointer;
`;

const SignUpBtn = styled.div`
  width: calc(100% - 24px);
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--point-borderColor);

  color: var(--point2-fontColor);
  cursor: pointer;
`;

const SignTitleTxt = styled.h3`
  width: 100%;
  font-size: 26px;

  text-align: center;

  padding-bottom: 40px;
  margin: 0px;
  margin-bottom: 32px;

  border-bottom: 1px solid var(--gray-borderColor);
`;

const SignInfoTxt = styled.h5`
  font-size: 16px;
  font-weight: 300;

  margin: 0px;
  color: ${(props) => props.color};
`;

const ForgotPWTxt = styled.h6`
  font-size: 13px;
  font-weight: 300;

  margin: 0px;
  color: ${(props) => props.color};

  cursor: pointer;
`;
export {
  BodyContainer,
  SignContainer,
  SignInputContainer,
  SignBtnContainer,
  SignInBtn,
  SignUpBtn,
  SignInput,
  SignTitleTxt,
  SignInfoTxt,
  ForgotPWTxt,
};
