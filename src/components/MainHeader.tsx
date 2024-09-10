import Logo from "../assets/images/Logo.png";
import Tehrani from "../assets/images/Tehrani.png";
import Button from "@mui/material/Button";
import InputIcon from "../assets/iconComponent/InputIcon";
import LogOutIcon from "../assets/iconComponent/LogOutIcon";
import HeartIcon from "../assets/iconComponent/HeartIcon";
import CartIcon from "../assets/iconComponent/CartIcon";
import LinkMui from "@mui/material/Link";
import SearchIcon from "../assets/iconComponent/SearchIcon";

import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
const MainHeader = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{ padding: "16px 80px", gap: "40px", alignItems: "center" }}
      >
        <Stack direction="row" sx={{ gap: "16px", alignItems: "center" }}>
          <Box component="img" src={Logo} />
          <Box component="img" src={Tehrani} />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            flexGrow: 1,
            boxShadow: "0px 0px 4px 0px #0000003D",
            borderRadius: "8px",
          }}
        >
          <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
            placeholder="جستجو در محصولات ..."
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "46px",
                width: "100%",
                borderRadius: "0 8px 8px 0",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Button
            sx={{
              background: "#DEB000",
              height: "46px",
              width: "46px",
              borderRadius: "8px 0 0 8px",
              "&:hover": {
                background: "#DEB000",
              },
            }}
          >
            <InputIcon />
          </Button>
        </Stack>
        <Stack sx={{ flexDirection: "row", gap: "24px" }}>
          <LinkMui
            style={{ textDecoration: "none" }}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <LogOutIcon />
            <Typography
              sx={{
                textDecoration: "none",
                color: "#474747",
                fontSize: ".75rem",
              }}
            >
              ورود / ثبت نام
              <br />
              به حساب کاربری
            </Typography>
          </LinkMui>
          <LinkMui
            style={{ textDecoration: "none" }}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <HeartIcon />
            <Typography
              sx={{
                textDecoration: "none",
                color: "#474747",
                fontSize: ".75rem",
              }}
            >
              ورود / ثبت نام
              <br />
              به حساب کاربری
            </Typography>
          </LinkMui>
          <LinkMui
            style={{ textDecoration: "none" }}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <CartIcon />
            <Typography
              sx={{
                textDecoration: "none",
                color: "#474747",
                fontSize: ".75rem",
              }}
            >
              سبد خرید
            </Typography>
          </LinkMui>
        </Stack>
      </Stack>
    </>
  );
};

export default MainHeader;
