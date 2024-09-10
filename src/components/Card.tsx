import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import HeartIcon from "../assets/iconComponent/HeartIcon";
import CartMiniIcon from "../assets/iconComponent/CartMiniIcon";

const Card = ({ data, index, radius = false, counter = 0 }) => {
  return (
    <>
      <Stack direction="column" gap="8px">
        <Box
          component="img"
          src={data.image}
          sx={{ borderRadius: radius ? "8px" : "0" }}
        ></Box>
        <Typography
          sx={{
            color: "#111111",
            fontSize: ".875rem",
            justifyContent: "center",
          }}
        >
          هودی مردانه سرمه ای زرد برساد Bersad مدل D111
        </Typography>
        <Stack direction="row" sx={{ gap: "8px", alignItems: "center" }}>
          <Rating name="read-only" value={data.rate} />
          <Typography sx={{ verticalAlign: "end" }}>5</Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Stack direction="row" sx={{ gap: "8px", alignItems: "center" }}>
            <Typography sx={{ color: "#C30018", fontWeight: "700" }}>
              {data.price}تومان
            </Typography>
            <Typography component="s" sx={{ color: "#474747" }}>
              {data.prevPrice}
            </Typography>
          </Stack>
          <HeartIcon color="#474747" />
        </Stack>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",

            width: "100%",
            background: "#C30018",
            borderRadius: "8px",
            color: "#fff",
            gap: "10px",
            fontWeight: "700",
            "&:hover": {
              background: "#C30018",
            },
          }}
        >
          {data.discountPercent}٪ تخفیف
          <CartMiniIcon />
        </Button>
      </Stack>
      {!(index > counter) && (
        <Box
          sx={{ width: "2px", height: "310px", background: "#EAEAEA" }}
        ></Box>
      )}
    </>
  );
};

export default Card;
