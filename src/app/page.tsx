import AppBar from "@/components/RootPage/AppBar"
import Text from "@/components/RootPage/Text"
import { Stack } from "@mui/material"

function Home() {
  return (
    <Stack
      maxWidth={"inherit"} // Siempre y cuando <body> tenga maxWidth 100vw
      minHeight={"inherit"} // Siempre y cuando <body> tenga minHeight 100vh
      id="home-main-stack-container"
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AppBar />
      <Text />
    </Stack>
  )
}

export default Home
