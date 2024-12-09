"use client"

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import Link from "next/link"
import { AboutPath, LoginPath } from "@/app/routeNames"

function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Stack
        id="root-page-appbar"
        direction={"row"}
        justifyContent={"space-between"}
        position={"absolute"}
        top={0}
        width={"100%"}
        paddingX={"8px"}
      >
        <Typography
          color={"primary"}
          sx={{
            typography: {
              xs: "h3",
            },
            fontWeight: "600",
          }}
        >
          Landy
        </Typography>
        <IconButton
          onClick={() => {
            setDrawerOpen(true)
          }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
      {/* DRAWER */}
      <Drawer
        open={drawerOpen}
        PaperProps={{
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          },
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={() => setDrawerOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem>
            <Link href={LoginPath}>
              <ListItemButton>
                <ListItemText
                  sx={(t) => ({
                    color: t.palette.primary.main,
                  })}
                  primary={"Sign In"}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={AboutPath}>
              <ListItemButton>
                <ListItemText
                  primary={"About"}
                  sx={(t) => ({
                    color: t.palette.text.primary,
                  })}
                ></ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default AppBar
