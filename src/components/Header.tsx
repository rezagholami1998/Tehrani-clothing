import TopMenu from "./TopMenu";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import { Stack } from "@mui/material";
const Header = () => {
  return (
    <>
      <Stack
        direction="column"
        sx={{ boxShadow: " 0px 2px 6px 0px #00000040" }}
      >
        <TopMenu />
        <MainHeader />
        <Navbar />
      </Stack>
    </>
  );
};

export default Header;
