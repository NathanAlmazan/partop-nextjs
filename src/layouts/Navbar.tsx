import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';
import NavConfig from "./NavConfig";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const NavTypography = styled(Typography)<{ ownerState: boolean }>(
    ({ theme, ownerState }) => ({
        cursor: "pointer",
        color: theme.palette.secondary.main,
        transition: "color 1s ease",
        '&:hover': {
            color: theme.palette.primary.main
        },
        ...(ownerState && {
            fontWeight: "bold",
            color: theme.palette.primary.main
        })
    })
);

export default function Navbar() {
  const { pathname, push } = useRouter();
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCollapse(!collapse);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLSpanElement>, path: string) => {
    push(path);
  }

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={80}
      >
        <Typography component="h1" variant="h5">
          PARTOP
        </Typography>
        <Stack
          display={{ xs: "none", md: "flex" }}
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
            {NavConfig.map(nav => 
                <NavTypography 
                    key={nav.label} 
                    ownerState={Boolean(pathname == nav.path)} 
                    variant="subtitle1"
                    onClick={event => handleNavClick(event, nav.path)}
                >
                    {nav.label}
                </NavTypography>
            )}
        </Stack>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            display: { xs: "none", md: "flex" }
          }}
        >
          Quotation
        </Button>
        <IconButton
          onClick={handleMenuClick}
          sx={{
            display: { xs: "block", md: "none" }
          }}
        >
          {collapse ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Stack>
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 3 }}
        >
            {NavConfig.map(nav => 
                <NavTypography 
                    key={nav.label} 
                    ownerState={Boolean(pathname == nav.path)} 
                    variant="body1"
                    onClick={event => handleNavClick(event, nav.path)}
                >
                    {nav.label}
                </NavTypography>
            )}
          <br/>
          <Button variant="outlined" color="secondary">
            Quotation
          </Button>
        </Stack>
      </Collapse>
    </Container>
  );
}
