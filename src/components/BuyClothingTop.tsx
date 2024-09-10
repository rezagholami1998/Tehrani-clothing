import { Box, Button, Stack, Typography } from "@mui/material";
import BuyClothing1 from "../assets/images/BuyClothing1.png";
import BuyClothing2 from "../assets/images/BuyClothing2.png";
import BuyClothing3 from "../assets/images/BuyClothing3.png";
import ArrowLeftIcon from "../assets/iconComponent/ArrowLeftIcon";
import TimeIcon from "../assets/iconComponent/TimeIcon";
import WorldIcon from "../assets/iconComponent/WorldIcon";
import SafePackage from "../assets/iconComponent/SafePackage";
import FastDelivery from "../assets/iconComponent/FastDelivery";
import SupportIcon from "../assets/iconComponent/SupportIcon";
const BuyClothingTop = () => {
  return (
    <>
      <Stack direction="column" gap="16px">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "9fr 3fr",
            gridTemplateRows: "2fr 2fr",
            padding: "16px 0",
            gap: "16px",
          }}
        >
          <Stack
            sx={{
              gridRow: "1/3",
              position: "relative",
              alignItems: "center",
              borderRadius: "16px",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={BuyClothing1}
              sx={{ borderRadius: "16px", width: "100%" }}
            />
            <Stack
              direction="column"
              sx={{ position: "absolute", gap: "24px" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  lineHeight: "36px",
                  color: "#852500",
                }}
              >
                خرید انواع پوشاک زنانه و مردانه
              </Typography>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  gap: "16px",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "6px 16px",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      lineHeight: "24px",
                      color: "#852500",
                      fontWeight: "700",
                    }}
                  >
                    لباس زنانه
                  </Typography>
                  <ArrowLeftIcon color="#852500" width="24px" height="24px" />
                </Button>
                <Button
                  sx={{
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "6px 16px",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      lineHeight: "24px",
                      color: "#852500",
                      fontWeight: "700",
                    }}
                  >
                    لباس زنانه
                  </Typography>
                  <ArrowLeftIcon color="#852500" width="24px" height="24px" />
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              gridRow: "1/2",
              position: "relative",
              alignItems: "center",
              borderRadius: "16px",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={BuyClothing2}
              sx={{ borderRadius: "16px", width: "100%", height: "100%" }}
            />
            <Stack
              direction="column"
              sx={{
                position: "absolute",
                gap: "16px",
                transform: "translate(-60px,0)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  lineHeight: "36px",
                  color: "#57575A",
                }}
              >
                انواع ست کلاه و شال
              </Typography>

              <Button
                sx={{
                  background: "#fff",
                  display: "flex",
                  alignSelf: "center",
                  borderRadius: "8px",
                  padding: "6px 16px",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "24px",
                    color: "#57575A",
                    fontWeight: "700",
                  }}
                >
                  خرید کلاه
                </Typography>
                <ArrowLeftIcon width="24px" height="24px" />
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              gridRow: "2/3",
              position: "relative",
              alignItems: "center",
              borderRadius: "16px",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={BuyClothing3}
              sx={{ borderRadius: "16px", width: "100%", height: "100%" }}
            />
            <Stack
              direction="column"
              sx={{
                position: "absolute",
                gap: "16px",
                transform: "translate(60px,0)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  lineHeight: "36px",
                  color: "#174AA0",
                }}
              >
                انواع ست کلاه و شال
              </Typography>
              <Button
                sx={{
                  background: "#fff",
                  display: "flex",
                  alignSelf: "center",
                  borderRadius: "8px",
                  padding: "6px 16px",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "24px",
                    color: "#174AA0",
                    fontWeight: "700",
                  }}
                >
                  خرید کفش
                </Typography>
                <ArrowLeftIcon width="24px" height="24px" />
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction="row"
          sx={{
            border: "1px solid #EAEAEA",
            borderRadius: "8px",
            padding: "12px 24px",
            justifyContent: "space-evenly",
            alignItems: "center",
            boxShadow: " 0px 4px 4px 0px #BFBFBF40",
          }}
        >
          <Stack direction="row" gap="12px">
            <TimeIcon />
            <Stack gap="4px">
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "#111111", fontSize: ".75rem" }}
              >
                ارسال به سراسر کشور
              </Typography>
              <Typography sx={{ color: "#474747", fontSize: ".75rem" }}>
                در کوتاه ترین زمان ممکن
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{ width: "2px", height: "70px", background: "#EAEAEA" }}
          ></Box>
          <Stack direction="row" gap="12px">
            <WorldIcon />
            <Stack gap="4px">
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "#111111", fontSize: ".75rem" }}
              >
                ارسال به سراسر کشور
              </Typography>
              <Typography sx={{ color: "#474747", fontSize: ".75rem" }}>
                در کوتاه ترین زمان ممکن
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{ width: "2px", height: "70px", background: "#EAEAEA" }}
          ></Box>
          <Stack direction="row" gap="12px">
            <SafePackage />
            <Stack gap="4px">
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "#111111", fontSize: ".75rem" }}
              >
                بسته بندی ایمن
              </Typography>
              <Typography sx={{ color: "#474747", fontSize: ".75rem" }}>
                سلامت فیزیکی کالا
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{ width: "2px", height: "70px", background: "#EAEAEA" }}
          ></Box>
          <Stack direction="row" gap="12px">
            <FastDelivery />
            <Stack gap="4px">
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "#111111", fontSize: ".75rem" }}
              >
                بسته بندی ایمن
              </Typography>
              <Typography sx={{ color: "#474747", fontSize: ".75rem" }}>
                سلامت فیزیکی کالا
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{ width: "2px", height: "70px", background: "#EAEAEA" }}
          ></Box>
          <Stack direction="row" gap="12px">
            <SupportIcon />
            <Stack gap="4px">
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "#111111", fontSize: ".75rem" }}
              >
                بسته بندی ایمن
              </Typography>
              <Typography sx={{ color: "#474747", fontSize: ".75rem" }}>
                سلامت فیزیکی کالا
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BuyClothingTop;
