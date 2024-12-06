import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { AboutPath, LoginPath } from "./routeNames"

function Home() {
  return (
    <Box
      width={"100%"}
      id="home-main-box-container"
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        minWidth={"10vw"}
        padding={2}
      >
        <Typography
          color="primary"
          fontWeight={"500"}
          variant="h1"
          sx={{}}
        >
          Landy
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
        >
          <Link href={AboutPath}>
            <Button>About</Button>
          </Link>
          <Link href={LoginPath}>
            <Button variant="contained">Sign In</Button>
          </Link>
        </Stack>
      </Stack>
      <Stack
        // position={"relative"}
        direction={"row"}
        width={"100%"}
        padding={2}
      >
        <Stack
          width={"70%"}
          justifyContent={"center"}
        >
          <Typography
            variant="h2"
            fontWeight={"400"}
            width={"50%"}
          >
            Landing page for startups
          </Typography>
          <Typography
            variant="body1"
            fontSize={24}
          >
            Beautiful landig page using NextJS and Material Desing components
          </Typography>
        </Stack>
        <Stack
          zIndex={-2}
          position={"relative"}
          width={"50%"}
          height={"70vh"}
        >
          <Image
            src={"/startup.jpg"}
            alt="image"
            fill
            sizes="100%"
            priority
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home
