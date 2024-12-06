"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-nunito)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Quitar las mayúsculas por defecto
        },
      },
    },
  },
})

export default theme
