import { Stack, Typography } from "@mui/material"

function Text() {
  return (
    <Stack id="root-page-text">
      <Stack
        padding={"10px"}
        spacing={"10px"}
      >
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
    </Stack>
  )
}

export default Text
