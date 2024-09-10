import { Box, Stack, Typography } from "@mui/material";
import Shoe from "../assets/images/Shoe.png";
import Shoe1 from "../assets/images/Shoe1.png";
import Shoe2 from "../assets/images/Shoe2.png";
import Shoe3 from "../assets/images/Shoe3.png";
import Shoe4 from "../assets/images/Shoe4.png";
import RowCard from "./RowCard";
const shoeList = [
  {
    id: 1,
    image: Shoe1,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Shoe2,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Shoe3,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
  {
    id: 1,
    image: Shoe4,
    title: "دمپایی مردانه ریوند کد 58997843",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "-20",
  },
];
const OfferBuy = () => {
  return (
    <>
      <Box sx={{ padding: "32px 0" }}>
        <Box
          sx={{
            display:"grid",
            gridTemplateColumns:"2fr 5fr",
            background: "#57438B",
            padding: "24px",
            borderRadius: "16px",
          }}
        >
          <Stack sx={{ padding: "42px 0" }}>
            <Box component="img" src={Shoe} sx={{ width: "265px" ,margin:"0 auto"}}></Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#FFFFFF",
                textAlign: "center",
                textWrap: "nowrap",
              }}
            >
              پیشنهادات شگفت انگیز
              <br />
              تخفیف ویژه
            </Typography>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "repeat(2,1fr)",
            }}
          >
            {shoeList.map((item) => (
              <RowCard data={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OfferBuy;
