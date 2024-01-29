import { Typography, Box } from "@mui/material";
import styled from "styled-components";
import theme from "../theme";
import Logo from "../Images/Logo";

const HeaderContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${theme.palette.grey[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 80px;
`;

const HeaderContent = styled(Box)`
  display: flex;
  flex: 1 1;
`;

const LeftContent = styled(Box)`
    display: flex;
    gap: 32px;
`

const HeaderSection = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LeftContent>
            <Logo />
            <Typography variant="body2" fontWeight={600} color={theme.palette.text.secondary}>
              About Us
            </Typography>
            <Typography variant="body2" fontWeight={600} color={theme.palette.text.secondary}>
              Trips for today
            </Typography>
          </LeftContent>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default HeaderSection;
