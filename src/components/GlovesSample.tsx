import { Box, Button, Stack, Typography } from "@mui/material";
import Glove1 from "../assets/images/Glove1.png";
import ArrowLeftIcon from "../assets/iconComponent/ArrowLeftIcon";
import Glove2 from "../assets/images/Glove2.png"
import Glove3 from "../assets/images/Glove3.png"
import Glove4 from "../assets/images/Glove4.png"
import Card from "./Card";
const CartList = [
  {
    id: 1,
    image: Glove2,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 2,
    image: Glove3,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 3,
    image: Glove4,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
];
const GlovesSample = () => {
  return (
    <>
      <Box sx={{ padding: "32px 0" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 5fr",
            background: "#008C7E",
            padding: "24px",
            borderRadius: "16px",
            boxShadow:"0px -4px 4px 0px #BFBFBF40"

          }}
        >
          <Stack sx={{ padding: "42px 0", gap: "24px" }}>
            <Box
              component="img"
              src={Glove1}
              sx={{ width: "200px", margin: "0 auto", borderRadius: "50%" }}
            ></Box>
            <Stack gap="16px" sx={{gap:"16px",background:""}}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  textAlign: "center",
                  textWrap: "nowrap",
                }}
              >
                انواع دستکش چرم
              </Typography>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 16px",
                  color: "#008C7E",
                  fontSize: ".875rem",
                  fontWeight: "500",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  alignSelf: "center",
                  "&:hover":{
                    background:"#FFF"
                  }
                }}
              >
                مشاهده همه
                <ArrowLeftIcon color="#008C7E" />
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-evenly",
              padding: "24px",
              background:"#fff",
              borderRadius: "16px",
              border: "1px solid #EAEAEA",
              boxShadow: "0px 4px 4px 0px #BFBFBF40",
            }}
          >
            {CartList.slice(0, 5).map((item,index) => (
              <Card data={item} index={index} counter={1} radius />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default GlovesSample;
