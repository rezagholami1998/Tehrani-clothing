import { Box, Button, Stack, Typography } from "@mui/material";
import Scarf1 from "../assets/images/Scarf1.png";
import Scarf2 from "../assets/images/Scarf2.png";
import Scarf3 from "../assets/images/Scarf3.png";
const Scarf = () => {
  return (
    <>
      <Box sx={{ padding: "32px 0" }}>
        <Stack
          sx={{
            flexDirection: "row",
            height: "380px",
            overflow: "hidden",
            background: "#009E5E",
            borderRadius: "16px",
            alignItems: "center",
          }}
        >
          <Stack direction="row" sx={{width:"1000px"}}>
            <Box
              component="img"
              src={Scarf1}
              sx={{
                width: "700px",
                height: "1000px",
                transform: "translate(130px, 150px)",
              }}
            />
            <Box
              component="img"
              src={Scarf2}
              sx={{
                width: "550px",
                height: "800px",
                transform: " translate(240px, 200px)",
              }}
            />
          </Stack>
          <Stack direction="column" sx={{gap:"24px",alignItems:"center",width:"25%"}}>
            <Box component="img" src={Scarf3} sx={{ borderRadius: "50%",width:"160px", }} />
            <Stack sx={{ flexDirection: "column", gap: "24px" }}>
              <Typography
                sx={{ fontWeight: "700", fontSize: "1.5rem", color: "#FFFFFF" }}
              >
                کالکشن‌های روسری و شال
              </Typography>
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Button
                  sx={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    color: "#009E5E",
                    fontWeight: "500",
                    background: "#fff",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  زنانه
                </Button>
                <Button
                  sx={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    color: "#009E5E",
                    fontWeight: "500",
                    background: "#fff",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  مردانه
                </Button>
                <Button
                  sx={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    color: "#009E5E",
                    fontWeight: "500",
                    background: "#fff",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  کودکانه
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Scarf;
