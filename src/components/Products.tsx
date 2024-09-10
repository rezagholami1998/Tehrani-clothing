import { Box, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Manto2 from "../assets/images/Manto2.png";
import Manto3 from "../assets/images/Manto3.png";
import Manto4 from "../assets/images/Manto4.png";
import Manto5 from "../assets/images/Manto5.png";
import Card from "./Card";
const CartList = [
  {
    id: 1,
    image: Manto2,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 2,
    image: Manto3,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 3,
    image: Manto4,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 4,
    image: Manto5,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 5,
    image: Manto5,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 6,
    image: Manto4,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 7,
    image: Manto5,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 8,
    image: Manto5,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 9,
    image: Manto4,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 10,
    image: Manto5,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
];

const CustomTabs = styled(Tabs)({
  display: "flex",
  gap: "8px",
});
const CustomTab = styled(Tab)({
  padding: "8px 12px",
  minWidth: "50px",
  background: "none",
  borderRadius: "50px",
  minHeight: "auto",
  fontWeight: "700",
  color: "#666666",
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Products = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack
        sx={{
          padding: "16px 0",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "50px", height: "1px", background: "#111111" }}></Box>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "700" }}>
          محصولات
        </Typography>
        <Box sx={{ width: "50px", height: "1px", background: "#111111" }}></Box>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          sx={{
            "& .MuiTabs-flexContainer": {
              gap: 3,
              justifyContent: "center",
            },
            "& .Mui-selected": {
              fontWeight: "700",
              borderRadius: "50px",
              background: "#EAEAEA",
            },
            "& .MuiButtonBase-root": {
              color: "#666666",
            },
            "&& .Mui-selected": {
              color: "#111111",
            },
          }}
        >
          <CustomTab label="مانتو و شلوار" {...a11yProps(0)} />
          <CustomTab label="تیشرت و بولیز" {...a11yProps(1)} />
          <CustomTab label="هودی و کاپشن" {...a11yProps(2)} />
          <CustomTab label="مانتو و شلوار" {...a11yProps(3)} />
          <CustomTab label="تیشرت و بولیز" {...a11yProps(4)} />
          <CustomTab label="هودی و کاپشن" {...a11yProps(5)} />
          <CustomTab label="مانتو و شلوار" {...a11yProps(6)} />
          <CustomTab label="تیشرت و بولیز" {...a11yProps(7)} />
          <CustomTab label="هودی و کاپشن" {...a11yProps(8)} />
        </CustomTabs>
        <Box
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-0`}
          aria-labelledby={`simple-tab-0`}
        >
          {value === 0 && (
            <Stack sx={{ flexDirection: "column", gap: "16px" }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 4px 0px #BFBFBF40",
                }}
              >
                {CartList.slice(0, 4).map((item, index) => (
                  <Card data={item} index={index} counter={2} radius />
                ))}
              </Stack>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 4px 0px #BFBFBF40",
                }}
              >
                {CartList.slice(4, 8).map((item, index) => (
                  <Card data={item} index={index}  counter={2} radius />
                ))}
              </Stack>
            </Stack>
          )}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-1`}
          aria-labelledby={`simple-tab-1`}
        >
          {value === 1 && (
            "hfherhfrhfuioh"
          )}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 2}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 2 && (
           "errfrfrf"
          )}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 3}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 3 && "dklcdnc"}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 4}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 4 && "dklcdnc"}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 5}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 5 && "dklcdnc"}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 6}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 6 && "dklcdnc"}
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 7}
          id={`simple-tabpanel-2`}
          aria-labelledby={`simple-tab-2`}
        >
          {value === 7 && "dklcdnc"}
        </Box>
      </Box>
    </>
  );
};
export default Products;
