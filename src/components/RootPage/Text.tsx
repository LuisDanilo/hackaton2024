import { Stack, Typography, Box } from "@mui/material"
import Image from "next/image"

function Text() {
  return (
    // Box con grid en lugar de Stack
    // Stack column con flex=1 no toma todo el height disponible de su padre (por ser de tipo column)
    // Por eso se usa Box con height 100% y grid 1x1 para centrar el unico elemento de la grilla
    <Box
      padding={"10px"}
      display={"grid"}
      height={"100%"}
      sx={{
        placeItems: "center",
      }}
      id="root-page-text"
    >
      <Stack
        spacing={"10px"}
        id="text-container"
      >
        <Box
          position={"relative"}
          width={"100%"}
          height={"500px"}
          sx={{
            display: {
              xs: "none",
              sm: "initial",
            },
          }}
        >
          <Image
            src="/startup.jpg"
            alt="startup-banner"
            fill
          />
        </Box>
        <Typography
          textAlign={"center"}
          sx={{
            typography: {
              xs: "h3",
            },
          }}
        >
          Landing page for startups
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{
            typography: {
              xs: "h5",
            },
          }}
        >
          Beautiful landing page using NextJS and Material Design components
        </Typography>
      </Stack>
    </Box>
    // </Box>
  )
}

export default Text
