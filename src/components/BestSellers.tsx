import { Button, Stack, Typography } from "@mui/material";
import ArrowLeftIcon from "../assets/iconComponent/ArrowLeftIcon";
import Hoodie2 from "../assets/images/Hoodie2.png";
import Hoodie1 from "../assets/images/Hoodie1.png";
import Tshirt1 from "../assets/images/Tshirt.png";
import Tshirt2 from "../assets/images/Tshirt2.png";
import Card from "./Card";
/////////////////////////////////////////////////////////////////////
const CartList = [
  {
    id: 1,
    image: Hoodie1,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate:5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 2,
    image: Hoodie2,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 3,
    image: Tshirt1,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 4,
    image: Tshirt2,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate:5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
  {
    id: 5,
    image: Tshirt1,
    title: "هودی مردانه سرمه ای زرد برساد Bersad مدل D111",
    rate: 5,
    price: "492,000",
    prevPrice: "820,000",
    discountPercent: "5",
  },
];
const BestSellers = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ padding: "32px 0 0" }}
      >
        <Typography variant="h6" sx={{ color: "#111111", fontWeight: "700" ,fontSize:"1.125rem"}}>
          پرفروش ترین ها
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
        {CartList.slice(0,4).map((item,index) => (
          <Card data={item} index={index} counter={2}/>
        ))}
      </Stack>
    </>
  );
};

export default BestSellers;