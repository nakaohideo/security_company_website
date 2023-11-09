import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", url: "#Home" },
  { name: "Our Services", url: "#Service" },
  { name: "About Us", url: "#About" },
  { name: "Contact Us", url: "#Contact" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const flag = true;
const RightAvatar = (
  <IconButton sx={{ p: 0 }}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  </IconButton>
);
const RightText = (
  <Link
    to="/Login"
    style={{
      textAlign: "center",
      color: "white",
      fontSize: 20,
      fontFamily: "Inter",
      fontWeight: "500",
      wordWrap: "break-word",
      textDecoration: "none",
    }}
  >
    Sign in
  </Link>
);

export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            textDecoration: "none",
            color: "white",
            fontSize: 40,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
            margin: "50px 50px 50px 150px",
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  component="a"
                  href={page.url}
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontSize: 14,
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    wordWrap: "break-word",
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontSize: 40,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
            margin: "20px",
          }}
        >
          LOGO
        </Typography>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            gap: "22px",
          }}
        >
          {pages.map((page) => (
            <Typography
              component="a"
              href={page.url}
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: "500",
                wordWrap: "break-word",
                textDecoration: "none",
              }}
            >
              {page.name}
            </Typography>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>{flag ? RightAvatar : RightText}</Box>
      </Toolbar>
    </AppBar>
  );
}
