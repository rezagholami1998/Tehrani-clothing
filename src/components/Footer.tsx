import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MapIcon from "../assets/iconComponent/MapIcon";
import FaceBookIcon from "../assets/iconComponent/FacebookIcon";
import TwitterIcon from "../assets/iconComponent/TwitterIcon";
import LinkdinIcon from "../assets/iconComponent/LinkdinIcon";
import YouTubeIcon from "../assets/iconComponent/YouTubeIcon";
const helpBuyList = [
  {
    id: 1,
    to: "",
    linkName: "ثبت سفارش",
  },
  {
    id: 2,
    to: "",
    linkName: "شیوه‌های پرداخت",
  },
  {
    id: 3,
    to: "",
    linkName: "رویه‌ها ارسال سفارش",
  },
];
const servicesList = [
  {
    id: 1,
    to: "",
    linkName: "ثبت سفارش",
  },
  {
    id: 2,
    to: "",
    linkName: "شیوه‌های پرداخت",
  },
  {
    id: 3,
    to: "",
    linkName: "رویه‌ها ارسال سفارش",
  },
];
const fastAccessList = [
  {
    id: 1,
    to: "",
    linkName: "ثبت سفارش",
  },
  {
    id: 2,
    to: "",
    linkName: "شیوه‌های پرداخت",
  },
  {
    id: 3,
    to: "",
    linkName: "رویه‌ها ارسال سفارش",
  },
];
const Footer = () => {
  return (
    <>
      <Stack sx={{ boxShadow: " 0px -4px 4px 0px #BFBFBF40" }}>
        <Box sx={{ width: "100%", height: "2px", background: "#DEB000" }}></Box>
        <Stack sx={{ padding: "24px 80px", gap: "32px" }}>
          <Stack sx={{ gap: "16px" }}>
            <Typography sx={{ fontWeight: "700", color: "#111111" }}>
              پوشاک تهرانی، مناسب هر سلیقه
            </Typography>
            <Typography
              sx={{
                fontSize: ".875rem",
                color: "#474747",
                textAlign: "justify",
              }}
            >
              مرکز خرید آنلاین بانی ‌مد در سال 1393 کار خود را به صورت تخصصی در
              زمینه پوشاک و سبک زندگی آغاز کرد. در این سال‌ها، بانی مد با همکاری
              بیشتر از 700 برند، توانسته است تجربه‌ای خوب از خرید آنلاین لباس و
              پوشاک برای مخاطبان خود رقم بزند. مهم‌ترین رسالت بانی ‌مد بهبود
              کیفیت سبک زندگی است و رضایت اکثریت مخاطبان این فروشگاه اینترنتی،
              گواهی بر این ادعاست؛ رضایتی که پشتوانه‌ای استوار برای تحقق دیگر
              اهداف بلند مدت بانی ‌مد است.
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Stack sx={{ flexDirection: "row", gap: "32px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "190px",
                  height: "190px",
                  borderRadius: "8px",
                  alignItems: "center",
                  position: "relative",
                  background: "#005249",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontWeight: "700", lineHeight: "36px" }}
                >
                  ۷ روز هفته، ۲۴ ساعته
                  <br />
                  پاسخگوی شما هستیم
                </Typography>
                <Typography sx={{ fontSize: "1.375rem", color: "#fff" }}>
                  ۳۴۵۶۷۵۷ - ۰۲۱
                </Typography>
                <Button
                  sx={{
                    position: "absolute",
                    background: "#D5A800",
                    border: "1px solid #FAFAFA",
                    fontWeight: "700",
                    lineHeight: "24px",
                    padding: "6px 32px",
                    color: "#fff",
                    bottom: "-20px",
                  }}
                >
                  تماس
                </Button>
              </Box>
              <Stack sx={{ flexDirection: "column", gap: "32px" }}>
                <Stack sx={{ flexDirection: "row", gap: "16px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "54px",
                      height: "54px",
                      background: "#DEB000",
                      borderRadius: "8px",
                    }}
                  >
                    <MapIcon />
                  </Box>
                  <Stack direction="column" gap="12px">
                    <Typography
                      sx={{
                        fontSize: ".875rem",
                        color: "#111111",
                        fontWeight: "700",
                      }}
                    >
                      دفتر مرکزی
                    </Typography>
                    <Typography sx={{ color: "#474747", fontSize: ".875rem" }}>
                      تهران - خیابان ولیعصر - کوچه آریا - ساختمان شفق - طبقه
                      پنجم
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        color: "#111111",
                        fontSize: ".875rem",
                      }}
                    >
                      راهنمای خرید
                    </Typography>
                    <List sx={{ display: "flex", flexDirection: "column" }}>
                      {helpBuyList.map((item) => (
                        <ListItem disablePadding>
                          <ListItemButton sx={{ padding: "2px" }}>
                            <ListItemText
                              primary={item.linkName}
                              sx={{
                                textAlign: "right",
                                "& .MuiTypography-root": {
                                  fontSize: ".875rem",
                                  color: "#474747",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        color: "#111111",
                        fontSize: ".875rem",
                      }}
                    >
                      خدمات مشتریان
                    </Typography>
                    <List sx={{ display: "flex", flexDirection: "column" }}>
                      {servicesList.map((item) => (
                        <ListItem disablePadding>
                          <ListItemButton sx={{ padding: "2px" }}>
                            <ListItemText
                              primary={item.linkName}
                              sx={{
                                textAlign: "right",
                                "& .MuiTypography-root": {
                                  fontSize: ".875rem",
                                  color: "#474747",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        color: "#111111",
                        fontSize: ".875rem",
                      }}
                    >
                      دسترسی سریع
                    </Typography>
                    <List sx={{ display: "flex", flexDirection: "column" }}>
                      {fastAccessList.map((item) => (
                        <ListItem disablePadding>
                          <ListItemButton sx={{ padding: "2px" }}>
                            <ListItemText
                              primary={item.linkName}
                              sx={{
                                textAlign: "right",
                                "& .MuiTypography-root": {
                                  fontSize: ".875rem",
                                  color: "#474747",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{ flexDirection: "column", gap: "32px" }}>
              <Stack sx={{ flexDirection: "row", gap: "16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "54px",
                    height: "54px",
                    background: "#005249",
                    borderRadius: "8px",
                  }}
                >
                  <MapIcon />
                </Box>
                <Stack direction="column" gap="12px">
                  <Typography
                    sx={{
                      fontSize: ".875rem",
                      color: "#111111",
                      fontWeight: "700",
                    }}
                  >
                    پست الکترونیک
                  </Typography>
                  <Typography sx={{ color: "#474747", fontSize: ".875rem" }}>
                    pooshaketehrani.ir
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" ,gap:"14px"}}
              >
                <Box sx={{height:"115px",width:"115px",background:"#EAEAEA",borderRadius:"8px"}}></Box>
                <Box sx={{height:"115px",width:"115px",background:"#EAEAEA",borderRadius:"8px"}}></Box>
                <Box sx={{height:"115px",width:"115px",background:"#EAEAEA",borderRadius:"8px"}}></Box>
                <Box sx={{height:"115px",width:"115px",background:"#EAEAEA",borderRadius:"8px"}}></Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{flexDirection:"row",justifyContent:"space-between"}}>
            <Typography
              sx={{ fontSize: ".87rem", color: "#474747", lineHeight: "21px" }}
            >
              کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی
              برداری شامل پیگرد قانونی می باشد.
            </Typography>
            <Stack sx={{ flexDirection: "row" ,gap:"24px"}}>
              <Link>
                <FaceBookIcon />
              </Link>
              <Link>
                <TwitterIcon />
              </Link>
              <Link>
                <YouTubeIcon />
              </Link>
              <Link>
               <LinkdinIcon />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
