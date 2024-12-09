import AppBar from "@/components/RootPage/AppBar"
import Text from "@/components/RootPage/Text"
import { Stack } from "@mui/material"

function Home() {
  return (
    <Stack
      id="home-main-stack-container"
      justifyContent={"start"}
      alignItems={"center"}
      height={"100%"}
    >
      <AppBar />
      <Text />
    </Stack>
  )
}

export default Home
