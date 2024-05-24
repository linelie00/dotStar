import { HeaderContainer, HeaderContentBox, TitleTxt } from '../../styles/LayoutStyles';
import logo from '../../assets/icons/logo.svg';

function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderContentBox>
        <img src={logo} alt="dotStar logo" />
        <TitleTxt>DotStar</TitleTxt>
      </HeaderContentBox>
      <HeaderContentBox></HeaderContentBox>
    </HeaderContainer>
  );
}

export default HeaderComponent;
