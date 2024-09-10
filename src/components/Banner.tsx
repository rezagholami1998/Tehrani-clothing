import { Button, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <>
      <Stack
        sx={{
          background: "#FFEBEB",
          padding: "20px",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "16px",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#C30018" }}>
          تخفیف فوق العاده برای{" "}
          <Typography
            component="span"
            sx={{
              borderBottom: "2px solid #C30018",
              color: "#C30018",
              fontWeight: "700",
            }}
          >
            اولین خرید{" "}
          </Typography>
          شما
        </Typography>
        <Button
          sx={{
            color: "#C30018",
            border: "2px dotted #C30018",
            marginX: "16px",
          }}
        >
          FREE25CAD
        </Button>
        <Typography sx={{ color: "#C30018" }}>
          در تسویه حساب از کد تخفیف استفاده کنید!
        </Typography>
      </Stack>
    </>
  );
};

export default Banner;
