import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowLeftIcon from "../assets/iconComponent/ArrowLeftIcon";
import Scarf4 from "../assets/images/Scarf4.png";
import Scarf5 from "../assets/images/Scarf5.png";
import Scarf6 from "../assets/images/Scarf6.png";
import Scarf7 from "../assets/images/Scarf7.png";
import Scarf8 from "../assets/images/Scarf8.png";
import RowCard from "./RowCard";
const shoeList = [
  {
    id: 1,
    image: Scarf5,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf6,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf7,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf8,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf5,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf6,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf7,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf8,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf5,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf6,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf7,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Scarf8,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
];
const ScarfSample = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: "#111111", fontWeight: "700" ,fontSize:"1.125rem"}}>
          انواع شال و روسری
        </Typography>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#C30018",
            fontSize: ".875rem",
            fontWeight: "500",
          }}
        >
          مشاهده همه
          <ArrowLeftIcon color="#C30018" />
        </Button>
      </Stack>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "2fr 8fr", gap: "16px" }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={Scarf4}
            sx={{ borderRadius: "16px", width: "100%" }}
          ></Box>
          <Box
            sx={{
              background: "#00D8AD",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
          >
            <Box
              sx={{
                border: "2px dotted #fff",
                borderRadius: "50%",
                width: "90px",
                height: "90px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              70%
            </Box>
          </Box>
          <Stack
            sx={{
              flexDirection: "column",
              position: "absolute",
              bottom: "32px",
              gap: "16px",
            }}
          >
            <Typography
              sx={{ fontWeight: "700", color: "#fff", fontSize: "1.5rem" }}
            >
              انواع شال و روسری
            </Typography>
            <Button
              sx={{
                background: "#D5A800",
                display: "flex",
                alignSelf: "center",
                borderRadius: "8px",
                padding: "6px 16px",
                gap: "10px",
                fontWeight: "700",
                "&:hover": {
                  background: "#D5A800",
                },
              }}
            >
              <Typography
                sx={{
                  lineHeight: "24px",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                خرید کفش
              </Typography>
              <ArrowLeftIcon width="24px" height="24px" color="#fff" />
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            padding: "8px 16px",
            borderRadius: "16px",
            border: "1px solid #EAEAEA",
            gridTemplateRows: "repeat(4,1fr)",
            gridTemplateColumns: "repeat(3,1fr)",
            boxShadow: "0px 4px 4px 0px #BFBFBF40",
          }}
        >
          {shoeList.map((item) => (
            <RowCard data={item} miniCard />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ScarfSample;
