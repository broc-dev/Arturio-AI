import styled from "styled-components";
import heroBg from "../hero-bg.png";
import mintBg from "../mint-bg.png";
import buttonBg from "../button-bg.png";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  max-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px 80px;
  border-bottom: 1px solid #494949;
  overflow: hidden;
  color: #ffffff;
  z-index: 2;
`;

export const NavItems = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  transition: all 100ms ease;;
  &:hover {
    color: #E0D517;
  }
`;

export const Body = styled.div`
  padding-top: 50px;
  width: 100%;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding: 0 80px;
  
  &::before {
    content: "";
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
    opacity: 40%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
    z-index: -1
  };
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  h1 {
    font-size: 78px;
    line-height: 82px;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  h2 {
    font-size: 1rem;
    line-height: 1.8rem;
    font-weight: 400;
    max-width: 500px;
    margin-bottom: 1rem;
    color: #78715E;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

export const HeroImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}`;

export const CenterImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`;

export const SampleImage = styled.img`
  width: 500px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
  transition: all 700ms ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding: 20px 80px;
`;

export const Heading = styled.h1`
  color: #cccccc;
  font-size: 58px;
  line-height: 72px;
  font-weight: 600;
  margin-bottom: 0.3rem;
  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

export const HeadingTwo = styled.h2`
  color: #aaaaee;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 0.8rem;
}`;

export const Subtext = styled.h2`
  color: #78715E;
  max-width: 500px;
  font-size: 1rem;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const MintSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding: 20px 80px;
  position: relative;

  &::before {
    content: "";
    background-image: url(${mintBg});
    background-size: cover;
    background-position: center;
    opacity: 40%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    z-index: -1
  };
`;

export const MintInterface = styled.div`
  background-color: #000000;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputInfo = styled.p`
  width: 100%;
  margin-bottom: 0;
  color: #494949;
  font-size: 0.8rem;
  line-height: 1.8rem;
  font-weight: 500;
`;

export const InputText = styled.input`
  width:  100%;
  height: 40px;
  border: 1px solid #494949;
  background-color: #000000;
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  transition: all 100ms ease;
  &:hover {
    background-color: #111111;
  }
  &:focus {
    border: 1px solid #E0D517;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #000000;
  border: 1px solid ${props => props.buttonType == "primary" ? "#ffffff" : "#cccccc"};
  height: 50px;
  color: ${props => props.buttonType == "primary" ? "#ffffff" : "#cccccc"};
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 12px 30px;
  min-width: 140px;
  text-align: center;
  text-decoration: none;
  transition: all 150ms;
  &:hover {
    background-color: ${props => props.buttonType == "primary" ? "#E0D517" : "#e1e1e1"};
    color: #000000;
    border: 1px solid rgba(0,0,0,0);
  }
`;

export const MintBox = styled.div`
  background-color: #111111;
  width: 340px;
  padding: 40px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`;

export const MintAmountSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}`;

export const MintAmountSelectorButton = styled.button`
  background-color: #000000;
  border: 1px solid #494949;
  height: 50px;
  color: #cccccc;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: 400;
  width: 30%;
  margin: 0;
  padding: 12px 30px;
  transition: all 150ms;
}`;

export const MintButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 14px;
  background-size: 200% 200%;
  background-image: url(${buttonBg});
  background-position: center;
`;

export const MintButton = styled.button`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  overflow: hidden;
  border: 1px solid #494949;
  height: 50px;
  color: #ffffff;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 150ms;
  position: relative;
  &:hover {
    background-color: rgba(0,0,0,0.1);
    border: 1px solid #E0D517;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 40px 80px;
}`;

export const AboutItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #111111;
  width: 100%;
  padding: 40px;
  margin: 40px 0 0 0;
}`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 240px;
  padding: 20px 80px;
  background-color: #111111;
  color: #ffffff;
  font-size: 0.8rem;
  line-height: 1.8rem;
  font-weight: 500;
}`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}`;

export const FooterTitle = styled.p`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0;
  color: #ffffff;
  border-bottom: 1px solid #E0D517;
`;

export const FooterLink = styled.a`
  color: #78715E;
  text-decoration: none;
  &:hover {
    color: #E0D517;
    text-decoration: underline;
  }
}`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const NavWordmark = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  `;

export const NavLogo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

export const Image = styled.img`
  height: 100%;
  max-width: 30vw;
  max-height: 30vh;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 8px;
`;
