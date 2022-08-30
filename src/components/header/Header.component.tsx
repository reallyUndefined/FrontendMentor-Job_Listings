import { SHeaderImageContainer } from "./Header.styles";
import headerBgMobile from "../../images/bg-header-mobile.svg";
import headerBgDesktop from "../../images/bg-header-desktop.svg";

function Header() {
  return (
    <SHeaderImageContainer>
      <img className="mob-img" src={headerBgMobile} alt="" />
      <img className="pc-img" src={headerBgDesktop} alt="" />
    </SHeaderImageContainer>
  );
}

export default Header;
