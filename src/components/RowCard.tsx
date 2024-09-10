import { Box, Rating, Stack, Typography } from "@mui/material";
const RowCard = ({ data, miniCard = false }) => {
  return (
    <>
      <Stack
        sx={{
          gap:"8px",
          width: "100%",
          alignSelf:"center",
          background: "#fff",
          borderRadius: "16px",
          flexDirection: "row",
          padding: miniCard ? "0" : "16px"
        }}
      >
        <Box
          component="img"
          src={data.image}
          sx={{
            width: miniCard ? "74px" : "140px",
            height: miniCard ? "74px" : "100%",
            borderRadius: "8px",
          }}
        ></Box>
        <Stack sx={{gap:miniCard ? "0" : "8px",justifyContent:miniCard ? "center" : "space-between"}}>
          <Typography sx={{ color: "#111111", fontSize: ".875rem" }}>
            {data.title}
          </Typography>

            {

              !miniCard &&  <Stack direction="row" sx={{ gap: "8px", alignItems: "center" }}>
              <Rating name="read-only" value={3} />
              <Typography sx={{ verticalAlign: "end" }}>5</Typography>
            </Stack>
            }
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
          </Stack>

          {!miniCard && (
            <Stack direction="row" gap="12px">
              <Stack direction="column" gap="2px">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    background: "#EAEAEA",
                  }}
                >
                  01
                </Box>
                <Typography
                  sx={{
                    color: "#474747",
                    fontSize: ".75rem",
                    textAlign: "center",
                  }}
                >
                  ثانیه
                </Typography>
              </Stack>
              <Stack direction="column" gap="2px">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    background: "#EAEAEA",
                  }}
                >
                  01
                </Box>
                <Typography
                  sx={{
                    color: "#474747",
                    fontSize: ".75rem",
                    textAlign: "center",
                  }}
                >
                  دقیقه
                </Typography>
              </Stack>
              <Stack direction="column" gap="2px">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    background: "#EAEAEA",
                  }}
                >
                  01
                </Box>
                <Typography
                  sx={{
                    color: "#474747",
                    fontSize: ".75rem",
                    textAlign: "center",
                  }}
                >
                  ساعت
                </Typography>
              </Stack>
              <Stack direction="column" gap="2px">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    background: "#EAEAEA",
                  }}
                >
                  01
                </Box>
                <Typography
                  sx={{
                    color: "#474747",
                    fontSize: ".75rem",
                    textAlign: "center",
                  }}
                >
                  روز
                </Typography>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default RowCard;
