import { Contract } from "@ethersproject/contracts";
import { shortenAddress, useCall, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState, useRef } from "react";

import { Body, Button, Container, Image, Link,
  NavBar, LogoSection, NavLogo, NavWordmark, NavItems, NavLink, Logo,
  Heading, HeadingTwo, ContentSection, Subtext,
  HeroSection, HeroContent, CTAButtons, CenterImage, HeroImage, SampleImage,
  InfoSection,
  MintSection, MintInterface, InputText, InputInfo, MintButton, MintBox, MintButtonContainer,
  MintAmountSelectorContainer, MintAmountSelectorButton,
  AboutSection, AboutItem,
  FooterSection, FooterLinks, FooterLink, FooterTitle
} from "./components";

import logo from "./logo.svg";
import sampleOne from "./art-sample.png";
import sampleTwo from "./curated.png";

import logoDesign from "./logo-design.png";

import { addresses, abis } from "@my-app/contracts";

function WalletButton() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  return (
    <Button buttonType="secondary"
      style={{"marginLeft": "20px"}}
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

function MintingPanel() {
  const [amountToMint, setAmount] = useState(10);
  const [mintStatus, setMintStatus] = useState("closed");
  const selOne = useRef(null);
  const selFive = useRef(null);
  const selTen = useRef(null);
  const HIGHLIGHT_COLOR = "#E0D517";

  /**
   * Checks the connected contract for the current mint status, then updates mintStatus.
   */
  useEffect(() => {
    if(mintStatus === "closed") return
    if(amountToMint == 1) {
      selOne.current.style.borderColor = HIGHLIGHT_COLOR;

      selFive.current.style.borderColor = "#494949";
      selTen.current.style.borderColor = "#494949";
    } else if (amountToMint == 5) {
      selFive.current.style.borderColor = HIGHLIGHT_COLOR;

      selOne.current.style.borderColor = "#494949";
      selTen.current.style.borderColor = "#494949";
    } else if (amountToMint == 10) {
      selTen.current.style.borderColor = HIGHLIGHT_COLOR;
      
      selOne.current.style.borderColor = "#494949";
      selFive.current.style.borderColor = "#494949";
    }
  }, [amountToMint]);

  useEffect(() => {
    
  }, []);

  if(mintStatus === "closed") {
    return (
      <MintBox>
        <Subtext style={{"fontSize": "48px", "lineHeight": "54px", "margin": "0", "color": "#aa5555"}}>MINT<br />NOT YET<br />ENABLED</Subtext>
      </MintBox>
    )
  } else if(mintStatus === "premint") {
      return (
        <MintBox>
          <HeadingTwo>PRE-MINT</HeadingTwo>
          <Subtext>
            1000 Pieces<br />
            10 Max Mint<br />
            1 Free Mint<br />
            0.1 ETH Each<br />
            </Subtext>
            <InputInfo>
            Amount to mint: <span style={{"color": "#78715E"}}>{amountToMint}</span>
            </InputInfo>
            <MintAmountSelectorContainer>
              <MintAmountSelectorButton ref={selOne} onClick={() => setAmount(1)}>1</MintAmountSelectorButton>
              <MintAmountSelectorButton ref={selFive} onClick={() => setAmount(5)}>5</MintAmountSelectorButton>
              <MintAmountSelectorButton ref={selTen} onClick={() => setAmount(10)}>10</MintAmountSelectorButton>
            </MintAmountSelectorContainer>
            {/* <InputText {...inputProps} placeholder="10" type='number' min={1} max={10} step={1} /> */}
            <MintButtonContainer>
              <MintButton>Mint</MintButton>
            </MintButtonContainer>
          </MintBox>
        )
    } else {
      return (
        <MintBox>
          <HeadingTwo>PUBLIC MINT</HeadingTwo>
          <Subtext>
            1000 Pieces<br />
            10 Max Mint<br />
            1 Free Mint<br />
            0.1 ETH Each<br />
            </Subtext>
            <InputInfo>
            Amount to mint: <span style={{"color": "#78715E"}}>{amountToMint}</span>
            </InputInfo>
            <MintAmountSelectorContainer>
              <MintAmountSelectorButton ref={selOne} onClick={() => setAmount(1)}>1</MintAmountSelectorButton>
              <MintAmountSelectorButton ref={selFive} onClick={() => setAmount(5)}>5</MintAmountSelectorButton>
              <MintAmountSelectorButton ref={selTen} onClick={() => setAmount(10)}>10</MintAmountSelectorButton>
            </MintAmountSelectorContainer>
            {/* <InputText {...inputProps} placeholder="10" type='number' min={1} max={10} step={1} /> */}
            <MintButtonContainer>
              <MintButton>Mint</MintButton>
            </MintButtonContainer>
          </MintBox>
        )
    }
}

function App() {
  // Read more about useDapp on https://usedapp.io/
  // const { error: contractCallError, value: tokenBalance } =
  //   useCall({
  //      contract: new Contract(addresses.ceaErc20, abis.erc20),
  //      method: "balanceOf",
  //      args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"],
  //   }) ?? {};

  return (
    <Container>
      <NavBar>
        <LogoSection>
          <NavLogo src={logo} alt="ethereum-logo" />
          <NavWordmark>Arturio</NavWordmark>
        </LogoSection>
        <NavItems>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#mint">Mint</NavLink>
          <NavLink href="https://opensea.com/collection/ArturioAI">OpenSea</NavLink>
          <NavLink href="https://twitter.com/arturioai">Twitter</NavLink>
          <WalletButton />
        </NavItems>
      </NavBar>
      <Body>
        <HeroSection>
          <HeroContent>
            <h1>THE NEXT<br />GENERATION<br />OF ART</h1>
            <h2>"SEE THE WORLD THROUGH NEW EYES WITH AI GENERATED ART"</h2>
            <CTAButtons>
              <Link href="#mint" style={{"marginRight": "20px"}}>
                <Button buttonType="primary">
                  Mint
                </Button>
              </Link>
              <Link href="#">
                <Button buttonType="secondary">
                  OpenSea
                </Button>
                </Link>
            </CTAButtons>
          </HeroContent>
          <HeroImage>
            <SampleImage src={sampleOne} alt="sample-one" />
          </HeroImage>
        </HeroSection>
        <InfoSection>
          <ContentSection>
            <Heading>FROM TOP<br />TO BOTTOM</Heading>
            <Subtext>The art, branding, website design for Arturio were created from the power of DALL-E 2, GPT-3, MidJourney, and CoPilot, with minimal help from human programmers.
              <br /><span style={{"color": "#A87A34", "display": "block","marginTop": "20px"}}>The future is now.</span>
              </Subtext>
          </ContentSection>
          <CenterImage style={{"marginLeft": "40px"}}>
            <SampleImage src={sampleTwo} alt="sample-two" />
          </CenterImage>
        </InfoSection>
        <MintSection id="mint">
          <MintInterface>
            <Heading>MINT<br />YOUR<br />ARTURIO</Heading>
            <MintingPanel />
          </MintInterface>
        </MintSection>
        <AboutSection id="mint">
          <Heading>ABOUT<br />ARTURIO</Heading>
          <Subtext>Arturio was developed from start to finish using proprietary artificial technology. For each of the below, AI played an outsized role in their creation.</Subtext>
          <AboutItem>
            <div>
              <HeadingTwo>LOGO DESIGN</HeadingTwo>
              <Subtext>Arturio was given a prompt of "Clean lines logo mark using white and yellow ochre for an AI art project" to come up with the current design of the logo</Subtext>
            </div>
            <Image src={logoDesign} />
          </AboutItem>
          <AboutItem>
            <div>
              <HeadingTwo>WEB DESIGN</HeadingTwo>
              <Subtext>Arturio was given a prompt of "Clean lines logo mark using white and yellow ochre for an AI art project" to come up with the current design of the logo</Subtext>
            </div>
            {/* <Image src={webDesign} /> */}
          </AboutItem>
        </AboutSection>
        <FooterSection>
          <Image src={logo} alt="arturio-logo" style={{"maxHeight": "70%"}} />
          <FooterLinks>
            <FooterTitle>GENERAL</FooterTitle>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#mint">Mint</FooterLink>
            <FooterLink href="https://opensea.com/collection/ArturioAI">OpenSea</FooterLink>
            <FooterLink href="https://twitter.com/arturioai">Twitter</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterTitle>INFORMATION</FooterTitle>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
          </FooterLinks>
        </FooterSection>
      </Body>
    </Container>
  );
}

export default App;
