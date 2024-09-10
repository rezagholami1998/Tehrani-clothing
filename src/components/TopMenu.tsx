import * as React from "react";
import PhoneIcon from "../assets/iconComponent/PhoneIcon";
import GmailIcon from "../assets/iconComponent/GmailIcon";
import TelegramIcon from "../assets/iconComponent/TelegramIcon";
import InstagramIcon from "../assets/iconComponent/InstagramIcon";
import { Box, Button, AppBar, Toolbar, Stack, Typography} from "@mui/material";
import { Link } from "react-router-dom";
/////////////////////////////////////////////////////////////////////
const TopMenu = () => {
  const pages = [
    {
      id: 1,
      ButtonName: "پیگیری سفارش",
      route: "follow-up",
    },
    {
      id: 2,
      ButtonName: "حریم خصوصی",
      route: "privacy",
    },
    {
      id: 3,
      ButtonName: "تماس با ما",
      route: "contact-us",
    },
  ];
  /////////////////////////////////////////////////////////////////////
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  /////////////////////////////////////
  // const DrawerList = (
  //   <>
  //     <Stack
  //       sx={{
  //         padding: "12px 24px",
  //         flexDirection: "row",
  //         background: "#D1232A",
  //         justifyContent: "space-between",
  //       }}
  //     >
  //       <Typography component="h6" sx={{ fontWeight: "500", color: "#FFF" }}>
  //         منو
  //       </Typography>
  //       <Box
  //         onClick={() => setOpen(false)}
  //         sx={{ display: "flex", cursor: "pointer" }}
  //       >
  //         {/* <Box component={CloseIcon}></Box> */}
  //       </Box>
  //     </Stack>
  //     <List
  //       sx={{
  //         width: "100%",
  //         zIndex: "1000",
  //         rowGap: "12px",
  //         display: "grid",
  //         background: "#fff",
  //         gridTemplateColumns: "repeat(2,1fr)",
  //         padding: { xs: "16px 5px", sm: "16px 24px" },
  //       }}
  //     >
  //       {menuItems?.map((item) => (
  //         <ListItem
  //           key={item.id}
  //           to={`/${item.route}`}
  //           component={Button}
  //           disablePadding
  //           sx={{ justifyContent: "center" }}
  //         >
  //           <ListItemButton
  //             sx={{ display: "flex", gap: { xs: "8px", sm: "16px" }}}
  //           >
  //             <ListItemIcon
  //               sx={{
  //                 "&.MuiListItemIcon-root": {
  //                   minWidth: "0px",
  //                 },
  //               }}
  //             >
  //               <item.icon color="#D1232A" width="24px" height="24px" />
  //             </ListItemIcon>
  //             <ListItemText
  //               primary={item.ButtonName}
  //               primaryTypographyProps={{
  //                 style: {
  //                   color: "#212121",
  //                   textAlign: "right",
  //                   fontSize: ".875rem",
  //                 },
  //               }}
  //             />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </>
  // );
  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          background: "#EAEAEA",
          position: { xs: "sticky", sm: "static" },
          padding: { xs: "2px 20px", sm: "8px 80px" },
          display: { xs: "block", sm: "none", lg: "block" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            "&": {
              minHeight: "30px",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "8px",
                alignItems: "center",
              }}
            >
              {pages.map((item) => (
                <Button
                  component={Link}
                  to={`/${item.route}`}
                  key={item.id}
                  sx={{
                    gap: "8px",
                    display: "flex",
                    minWidth: "auto",
                    color: "#474747",
                    lineHeight: "14px",
                    fontSize: "0.75rem",
                    alignItems: "center",
                  }}
                >
                  {item.ButtonName}
                </Button>
              ))}
            </Box>
            <Stack direction="row" sx={{ gap: "24px", alignItems: "center" }}>
              <Button
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  fontSize: ".75rem",
                  color: "#474747",
                }}
              >
                09123456789
                <PhoneIcon />
              </Button>
              <Button
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    color: "#474747",
                    alignSelf: "end",
                    textTransform: "lowercase",
                  }}
                >
                  test@gmail.com
                </Typography>
                <GmailIcon />
              </Button>
              <Box
                sx={{ width: "1px", height: "16px", background: "#474747" }}
              ></Box>
              <Stack direction="row" gap="16px">
                <Button><TelegramIcon /></Button>
                <Button><InstagramIcon /></Button>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            right: "0",
          },
        }}
      >
        {DrawerList}
      </Drawer> */}
    </>
  );
};
export default TopMenu;
