import { Typography, Box, Hidden } from "@mui/material";
import styled from "styled-components";
import theme from "../theme";
import Button from "../global/Button";
import PlayIcon from "../Images/Icons/PlayIcon";
import MaleDriver from "../Images/MaleDriver.png";
import FemaleDriver from "../Images/FemaleDriver.png";

const HeroWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 96px 80px;
  gap: 96px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 96px 0px;
    align-items: center
    justify-items: center;
`;

const HeroContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 32px;
  position: relative;
`;

const Badge = styled(Box)`
  background-color: ${theme.palette.primary[50]};
  color: ${theme.palette.primary[700]};
  display: flex;
  padding: 2px 8px;
  align-items: center;
  justify-items: center;
  border-radius: 16px;
  width: 267px;
  position: absolute;
  top: -40px;
`;

const HeroTextContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 760px;
`;

const HeroAction = styled(Box)`
  display: flex;
  gap: 12px;
`;

const HeroImages = styled(Box)`
padding: 0px 32px;
width: 1052px;

@media (max-width: ${theme.breakpoints.values.md}px) {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 30px;
  width: 700px;
`;

const ImageBackground = styled(Box)`
display: flex;
gap: 32.85px;
background-color: ${theme.palette.grey[100]};
width: 100%;
max-width: 1052px;
height: 480px;
border-radius: 16px;
position: relative;


@media (max-width: ${theme.breakpoints.values.md}px) {
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  height: 450px;
  align-items: center;
  justify-items: center;
  
}

@media (max-width: ${theme.breakpoints.values.sm}px) {
  max-width: 450px;
`;

const Man = styled.img`
  width: 100%;
  max-width: 510px;
  height: 410px;
  position: absolute;
  top: -30px;
  left: 30px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    max-width: 100%;
  }
`;
const Woman = styled.img`
  width: 100%;
  max-width: 450px;
  height: 624.92px;
  position: absolute;
  bottom: 30px;
  right: 30px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: none;
  }
`;

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <Badge>
            <Typography variant="subtitle1">
              Enjoy the Journey, Embrace the Savings
            </Typography>
          </Badge>
          <HeroTextContent>
            <Typography
              variant="h2"
              fontWeight={600}
              color={theme.palette.text.primary}
              sx={{ letterSpacing: "-1.2px" }}
            >
              Join Swing for Comfortable Commutes
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              color={theme.palette.text.secondary}
            >
              Swing offers comfort, savings, and safety in every ride.
              Experience the future of local travel with our affordable shared
              transportation services.
            </Typography>
          </HeroTextContent>
          <HeroAction>
            <Button
              type="secondary"
              label="Demo"
              height="60px"
              icon={<PlayIcon />}
            />
            <Button type="primary" label="See Trips for Today" height="60px" />
          </HeroAction>
        </HeroContent>
        <HeroImages>
          <ImageBackground>
            <Man src={MaleDriver} alt="Male Driver" />
            <Woman src={FemaleDriver} alt="Male Driver" />
          </ImageBackground>
        </HeroImages>
      </HeroWrapper>
    </>
  );
};

export default HeroSection;
