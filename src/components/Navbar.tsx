import ListIcon from "../assets/iconComponent/ListIcon";
import ArrowLeftIcon from "../assets/iconComponent/ArrowLeftIcon";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const MenuItems = [
  {
    id: "1",
    to:"",
    linkName: "زنانه",
  },
  {
    id: "2",
    to:"",
    linkName: "مردانه",
  },
  {
    id: "3",
    to:"",
    linkName: "بچگانه",
  },
  {
    id: "4",
    to:"",
    linkName: "روسری و شال و کلاه",
  },
  {
    id: "5",
    to:"",
    linkName: "کفش و دمپایی",
  },
  {
    id: "6",
    to:"",
    linkName: "دامن و کمربند",
  },
  {
    id: "7",
    to:"",
    linkName: "جوراب و پاپوش",
  },
  {
    id: "8",
    to:"",
    linkName: "لباس زیر",
  },
];
const Navbar = () => {
  return (
    <>
      <List
        component="nav"
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px 80px",
        }}
      >
        <ListItemButton
          sx={{
            display: "flex",
            gap: "4px",
            padding: 0,
            "&:hover":{
                background:"transparent"
            },
            "&.MuiButtonBase-root": {
              flexGrow: 0,
            },
          }}
        >
          <ListItemIcon
            sx={{
              "&.MuiListItemIcon-root": {
                minWidth: "20px",
              },
            }}
          >
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            secondary="دسته بندی کالا"
            sx={{
              "&.MuiListItemText-root": {
                flexGrow: 0,
              },
              "& .MuiTypography-root": {
                fontWeight: "700",
                color: "#005249",
                fontSize: ".875rem",
              },
            }}
          />
        </ListItemButton>
        {MenuItems.map((item) => (
          <ListItemButton
            sx={{
              padding: 0,
              "&.MuiButtonBase-root": {
                flexGrow: 0,
              },
              "&:hover":{
                background:"transparent"
            },
            }}
          >
            <ListItemText
              sx={{
                "&.MuiListItemText-root": {
                  flexGrow: 0,
                },
                "& .MuiTypography-root": {
                  color: "#474747",
                  fontSize: ".875rem",
                },
              }}
              secondary={item.linkName}
            />
            <ListItemIcon
              sx={{
                "&.MuiListItemIcon-root": {
                  minWidth: "20px",
                },
              }}
            >
              <ArrowLeftIcon />
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default Navbar;
