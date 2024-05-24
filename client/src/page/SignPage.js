import React, { useState } from 'react';
import {
  BodyContainer,
  SignContainer,
  SignInputContainer,
  SignInput,
  SignTitleTxt,
  SignInfoTxt,
  SignInBtn,
  SignUpBtn,
  ForgotPWTxt,
  SignBtnContainer,
} from '../styles/SignStyles';
import { auth } from '../data/firebaseConfig';

const SignPage = () => {
  const [view, setView] = useState('login');
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(userID, userPW);
      alert('로그인에 성공하였습니다.');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userData = {
        email: userID,
        password: userPW,
        username: userName,
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };

      const response = await fetch('http://localhost:8080/auth/signUp', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      alert('회원 가입에 성공하였습니다.');
      setView('login');
    } catch (error) {}
  };

  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(userID);
      alert('이메일로 비밀번호 재설정 메일을 보냈습니다.');
    } catch (error) {
      alert('이메일 전송에 실패했습니다. 이메일 주소를 확인해주세요.');
      setView('login');
      setError(error.message);
    }
  };

  return (
    <BodyContainer>
      {view === 'login' ? (
        <SignContainer height="calc(46.875% - 104px)" minHeight="486px">
          <SignTitleTxt>Login To DotStar</SignTitleTxt>
          <SignInputContainer>
            <SignInfoTxt>Email Address</SignInfoTxt>
            <SignInput
              type="text"
              placeholder="가입 시 사용한 이메일을 입력해주세요."
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </SignInputContainer>
          <SignInputContainer>
            <SignInfoTxt>Password</SignInfoTxt>
            <SignInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={userPW}
              onChange={(e) => setUserPW(e.target.value)}
            />
          </SignInputContainer>
          {error && <p>{error}</p>}
          <SignBtnContainer>
            <SignInBtn onClick={handleLogin}>Login</SignInBtn>
            <div>or</div>
            <SignUpBtn onClick={() => setView('signup')}>Create an Account</SignUpBtn>
            <ForgotPWTxt color="var(--point2-fontColor)" onClick={() => setView('forgotPassword')}>
              Forgot Password
            </ForgotPWTxt>
          </SignBtnContainer>
        </SignContainer>
      ) : view === 'signup' ? (
        <SignContainer height="calc(58% - 104px)" minHeight="600px">
          <SignTitleTxt>Create an Account</SignTitleTxt>
          <SignInputContainer>
            <SignInfoTxt>Nickname</SignInfoTxt>
            <SignInput
              type="text"
              placeholder="사용할 닉네임을 입력해주세요."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </SignInputContainer>
          <SignInputContainer>
            <SignInfoTxt>Email Address</SignInfoTxt>
            <SignInput
              type="text"
              placeholder="사용할 이메일을 입력해주세요."
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </SignInputContainer>
          <SignInputContainer>
            <SignInfoTxt>Password</SignInfoTxt>
            <SignInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={userPW}
              onChange={(e) => setUserPW(e.target.value)}
            />
          </SignInputContainer>
          <SignInputContainer>
            <SignInfoTxt>Confirm Password</SignInfoTxt>
            <SignInput
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </SignInputContainer>
          {error && <p>{error}</p>}
          <SignBtnContainer>
            <SignInBtn onClick={handleSignUp}>Create Account</SignInBtn>
            <div>or</div>
            <SignUpBtn onClick={() => setView('login')}>Login</SignUpBtn>
          </SignBtnContainer>
        </SignContainer>
      ) : (
        <SignContainer height="calc(30% - 104px)" minHeight="300px">
          <SignTitleTxt>Reset Password</SignTitleTxt>
          <SignInputContainer>
            <SignInfoTxt>Email Address</SignInfoTxt>
            <SignInput
              type="text"
              placeholder="재설정을 위한 이메일을 입력해주세요."
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </SignInputContainer>
          {error && <p>{error}</p>}
          <SignBtnContainer>
            <SignInBtn onClick={handleResetPassword}>Send Reset Link</SignInBtn>
            <ForgotPWTxt color="var(--point2-fontColor)" onClick={() => setView('login')}>
              Login
            </ForgotPWTxt>
          </SignBtnContainer>
        </SignContainer>
      )}
    </BodyContainer>
  );
};

export default SignPage;
